import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Search, Filter, Download, Eye, Users, Package, Euro } from 'lucide-react';
import Navbar from '@/components/Navbar';

interface ProductInquiry {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company_name: string;
  customer_type: string;
  product: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  created_at: string;
}

const Admin = () => {
  const { user, isAdmin, signOut, loading, adminLoading } = useAuth();
  const [inquiries, setInquiries] = useState<ProductInquiry[]>([]);
  const [filteredInquiries, setFilteredInquiries] = useState<ProductInquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [productFilter, setProductFilter] = useState('all');
  const [customerTypeFilter, setCustomerTypeFilter] = useState('all');
  const [loadingData, setLoadingData] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  console.log('🎛️ Admin component state:', { 
    user: user?.id, 
    isAdmin, 
    loading, 
    adminLoading, 
    authComplete: !loading && !adminLoading 
  });

  // Wait for BOTH loading states to complete before making any redirects
  useEffect(() => {
    console.log('📊 Admin useEffect - checking auth states:', {
      loading,
      adminLoading,
      user: !!user,
      isAdmin
    });

    // Only proceed if both auth checks are complete
    if (!loading && !adminLoading) {
      if (!user) {
        console.log('🚫 No user found, redirecting to auth');
        navigate('/auth');
      } else if (!isAdmin) {
        console.log('🚫 User is not admin, redirecting to home');
        navigate('/');
      } else {
        console.log('✅ User is authenticated admin, staying on admin page');
      }
    } else {
      console.log('⏳ Still loading auth states, waiting...');
    }
  }, [user, isAdmin, loading, adminLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin && !loading && !adminLoading) {
      console.log('📊 Fetching inquiries for admin user');
      fetchInquiries();
    }
  }, [user, isAdmin, loading, adminLoading]);

  useEffect(() => {
    filterInquiries();
  }, [inquiries, searchTerm, productFilter, customerTypeFilter]);

  const fetchInquiries = async () => {
    try {
      console.log('📥 Starting to fetch product inquiries...');
      const { data, error } = await supabase
        .from('product_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('❌ Error fetching inquiries:', error);
        throw error;
      }
      
      console.log('✅ Successfully fetched inquiries:', data?.length || 0);
      setInquiries(data || []);
    } catch (error) {
      console.error('💥 Exception in fetchInquiries:', error);
      toast({
        title: 'Fehler',
        description: 'Anfragen konnten nicht geladen werden.',
        variant: 'destructive',
      });
    } finally {
      setLoadingData(false);
    }
  };

  const filterInquiries = () => {
    let filtered = inquiries;

    if (searchTerm) {
      filtered = filtered.filter(inquiry =>
        inquiry.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.company_name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (productFilter !== 'all') {
      filtered = filtered.filter(inquiry => inquiry.product === productFilter);
    }

    if (customerTypeFilter !== 'all') {
      filtered = filtered.filter(inquiry => inquiry.customer_type === customerTypeFilter);
    }

    setFilteredInquiries(filtered);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const exportToCSV = () => {
    const headers = ['Datum', 'Name', 'E-Mail', 'Telefon', 'Unternehmen', 'Kundentyp', 'Produkt', 'Menge', 'Einzelpreis', 'Gesamtpreis'];
    const csvContent = [
      headers.join(','),
      ...filteredInquiries.map(inquiry => [
        new Date(inquiry.created_at).toLocaleDateString('de-DE'),
        `${inquiry.first_name} ${inquiry.last_name}`,
        inquiry.email,
        inquiry.phone || '',
        inquiry.company_name || '',
        inquiry.customer_type === 'privat' ? 'Privat' : 'Geschäftlich',
        inquiry.product,
        inquiry.quantity,
        `${inquiry.unit_price}€`,
        `${inquiry.total_price}€`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `produktanfragen_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getTotalRevenue = () => {
    return filteredInquiries.reduce((sum, inquiry) => sum + inquiry.total_price, 0);
  };

  // Show loading while ANY authentication state is being determined
  if (loading || adminLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#002454] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">
              {loading ? 'Lade Authentifizierung...' : 'Überprüfe Admin-Berechtigung...'}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Bitte warten Sie einen Moment...
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show loading for data after auth is complete
  if (loadingData) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#002454] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Lade Admin-Daten...</p>
          </div>
        </div>
      </div>
    );
  }

  // Only show empty return if auth is complete and user is not admin/authenticated
  // (This should never be reached due to useEffect redirect, but kept as safeguard)
  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#002454] to-[#050c21] rounded-2xl p-8 mb-8 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold font-parisine-narrow mb-2">ADMIN PANEL</h1>
                <p className="text-blue-200 text-lg">Verwaltung der Produktanfragen</p>
                <p className="text-blue-300 text-sm mt-2">Willkommen zurück, {user.email}</p>
              </div>
              <Button 
                onClick={handleSignOut} 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-200"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Abmelden
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#002454] opacity-80">Gesamt Anfragen</p>
                    <p className="text-3xl font-bold text-[#002454]">{filteredInquiries.length}</p>
                  </div>
                  <Users className="h-12 w-12 text-[#002454] opacity-60" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-700 opacity-80">Gesamtumsatz</p>
                    <p className="text-3xl font-bold text-green-700">{getTotalRevenue().toLocaleString('de-DE')}€</p>
                  </div>
                  <Euro className="h-12 w-12 text-green-700 opacity-60" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-700 opacity-80">Produkte</p>
                    <p className="text-3xl font-bold text-orange-700">{new Set(filteredInquiries.map(i => i.product)).size}</p>
                  </div>
                  <Package className="h-12 w-12 text-orange-700 opacity-60" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filter Section */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-t-lg">
              <CardTitle className="flex items-center text-[#002454]">
                <Filter className="w-5 h-5 mr-2" />
                Filter & Suche
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Namen oder E-Mail suchen..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-2 border-gray-200 focus:border-[#002454] focus:ring-[#002454]"
                  />
                </div>
                
                <Select value={productFilter} onValueChange={setProductFilter}>
                  <SelectTrigger className="border-2 border-gray-200 focus:border-[#002454]">
                    <SelectValue placeholder="Produkt auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle Produkte</SelectItem>
                    <SelectItem value="HB8">HB8</SelectItem>
                    <SelectItem value="HB10">HB10</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={customerTypeFilter} onValueChange={setCustomerTypeFilter}>
                  <SelectTrigger className="border-2 border-gray-200 focus:border-[#002454]">
                    <SelectValue placeholder="Kundentyp auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle Kunden</SelectItem>
                    <SelectItem value="privat">Privatkunden</SelectItem>
                    <SelectItem value="gewerbe">Geschäftskunden</SelectItem>
                  </SelectContent>
                </Select>

                <Button 
                  onClick={exportToCSV} 
                  className="bg-[#002454] hover:bg-[#050c21] text-white transition-all duration-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  CSV Export
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Main Table */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-[#002454] to-[#050c21] text-white rounded-t-lg">
              <CardTitle className="text-xl">Produktanfragen ({filteredInquiries.length})</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {filteredInquiries.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Keine Anfragen gefunden.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left p-4 font-semibold text-[#002454]">Datum</th>
                        <th className="text-left p-4 font-semibold text-[#002454]">Kunde</th>
                        <th className="text-left p-4 font-semibold text-[#002454]">Kontakt</th>
                        <th className="text-left p-4 font-semibold text-[#002454]">Typ</th>
                        <th className="text-left p-4 font-semibold text-[#002454]">Produkt</th>
                        <th className="text-left p-4 font-semibold text-[#002454]">Menge</th>
                        <th className="text-left p-4 font-semibold text-[#002454]">Gesamtpreis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInquiries.map((inquiry, index) => (
                        <tr key={inquiry.id} className={`border-b hover:bg-slate-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-25'}`}>
                          <td className="p-4">
                            <div className="font-medium text-[#002454]">
                              {new Date(inquiry.created_at).toLocaleDateString('de-DE')}
                            </div>
                            <div className="text-xs text-gray-500">
                              {new Date(inquiry.created_at).toLocaleTimeString('de-DE')}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="font-semibold text-[#002454]">
                              {inquiry.first_name} {inquiry.last_name}
                            </div>
                            {inquiry.company_name && (
                              <div className="text-sm text-gray-600 font-medium">
                                {inquiry.company_name}
                              </div>
                            )}
                          </td>
                          <td className="p-4">
                            <div className="text-sm">
                              <div className="font-medium text-[#002454]">{inquiry.email}</div>
                              {inquiry.phone && <div className="text-gray-600">{inquiry.phone}</div>}
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge 
                              variant={inquiry.customer_type === 'privat' ? 'secondary' : 'default'}
                              className={inquiry.customer_type === 'privat' 
                                ? 'bg-blue-100 text-blue-800 border-blue-200' 
                                : 'bg-green-100 text-green-800 border-green-200'
                              }
                            >
                              {inquiry.customer_type === 'privat' ? 'Privat' : 'Geschäftlich'}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <Badge 
                              variant="outline" 
                              className="font-mono font-bold bg-[#002454] text-white border-[#002454]"
                            >
                              {inquiry.product}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <span className="font-semibold text-[#002454]">{inquiry.quantity}x</span>
                          </td>
                          <td className="p-4">
                            <div className="font-bold text-lg text-green-600">
                              {inquiry.total_price.toLocaleString('de-DE')}€
                            </div>
                            <div className="text-xs text-gray-500">
                              Einzelpreis: {inquiry.unit_price.toLocaleString('de-DE')}€
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
