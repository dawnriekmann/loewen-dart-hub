
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
import { LogOut, Search, Filter, Download, Eye } from 'lucide-react';
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
  const { user, isAdmin, signOut, loading } = useAuth();
  const [inquiries, setInquiries] = useState<ProductInquiry[]>([]);
  const [filteredInquiries, setFilteredInquiries] = useState<ProductInquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [productFilter, setProductFilter] = useState('all');
  const [customerTypeFilter, setCustomerTypeFilter] = useState('all');
  const [loadingData, setLoadingData] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchInquiries();
    }
  }, [user, isAdmin]);

  useEffect(() => {
    filterInquiries();
  }, [inquiries, searchTerm, productFilter, customerTypeFilter]);

  const fetchInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('product_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
    } catch (error) {
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

  if (loading || loadingData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-32 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Laden...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
              <p className="text-gray-600">Verwaltung der Produktanfragen</p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Abmelden
            </Button>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filter & Suche
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Namen oder E-Mail suchen..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={productFilter} onValueChange={setProductFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Produkt auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle Produkte</SelectItem>
                    <SelectItem value="HB8">HB8</SelectItem>
                    <SelectItem value="HB10">HB10</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={customerTypeFilter} onValueChange={setCustomerTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Kundentyp auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle Kunden</SelectItem>
                    <SelectItem value="privat">Privatkunden</SelectItem>
                    <SelectItem value="gewerbe">Geschäftskunden</SelectItem>
                  </SelectContent>
                </Select>

                <Button onClick={exportToCSV} variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  CSV Export
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Produktanfragen ({filteredInquiries.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {filteredInquiries.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  Keine Anfragen gefunden.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Datum</th>
                        <th className="text-left p-3">Kunde</th>
                        <th className="text-left p-3">Kontakt</th>
                        <th className="text-left p-3">Typ</th>
                        <th className="text-left p-3">Produkt</th>
                        <th className="text-left p-3">Menge</th>
                        <th className="text-left p-3">Gesamtpreis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInquiries.map((inquiry) => (
                        <tr key={inquiry.id} className="border-b hover:bg-gray-50">
                          <td className="p-3">
                            {new Date(inquiry.created_at).toLocaleDateString('de-DE')}
                            <br />
                            <span className="text-xs text-gray-500">
                              {new Date(inquiry.created_at).toLocaleTimeString('de-DE')}
                            </span>
                          </td>
                          <td className="p-3">
                            <div className="font-medium">
                              {inquiry.first_name} {inquiry.last_name}
                            </div>
                            {inquiry.company_name && (
                              <div className="text-sm text-gray-600">
                                {inquiry.company_name}
                              </div>
                            )}
                          </td>
                          <td className="p-3">
                            <div className="text-sm">
                              <div>{inquiry.email}</div>
                              {inquiry.phone && <div>{inquiry.phone}</div>}
                            </div>
                          </td>
                          <td className="p-3">
                            <Badge variant={inquiry.customer_type === 'privat' ? 'secondary' : 'default'}>
                              {inquiry.customer_type === 'privat' ? 'Privat' : 'Geschäftlich'}
                            </Badge>
                          </td>
                          <td className="p-3">
                            <Badge variant="outline" className="font-mono">
                              {inquiry.product}
                            </Badge>
                          </td>
                          <td className="p-3">
                            {inquiry.quantity}x
                          </td>
                          <td className="p-3">
                            <div className="font-semibold">
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
