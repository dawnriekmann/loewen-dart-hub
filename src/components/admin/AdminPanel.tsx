
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useProductInquiries, ProductInquiry } from "@/hooks/useProductInquiries";
import { format } from "date-fns";
import { de } from "date-fns/locale";

const AdminPanel = () => {
  const { inquiries, isLoading, updateInquiryStatus } = useProductInquiries();
  const [filter, setFilter] = useState<'all' | 'HB8' | 'HB10'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'closed'>('all');

  const filteredInquiries = inquiries.filter(inquiry => {
    const productMatch = filter === 'all' || inquiry.product_type === filter;
    const statusMatch = statusFilter === 'all' || inquiry.status === statusFilter;
    return productMatch && statusMatch;
  });

  const totalValue = filteredInquiries.reduce((sum, inquiry) => sum + inquiry.product_price, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-600 text-white';
      case 'contacted': return 'bg-slate-600 text-white';
      case 'closed': return 'bg-green-700 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new': return 'Neu';
      case 'contacted': return 'Kontaktiert';
      case 'closed': return 'Abgeschlossen';
      default: return status;
    }
  };

  const handleStatusChange = (id: string, newStatus: 'new' | 'contacted' | 'closed') => {
    updateInquiryStatus.mutate({ id, status: newStatus });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 p-6 flex items-center justify-center">
        <div className="text-white">Lade Anfragen...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Panel</h1>
          <p className="text-slate-300">Verwaltung der Produktanfragen</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-white">{filteredInquiries.length}</div>
              <div className="text-slate-300 text-sm">Anfragen gesamt</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-white">
                {filteredInquiries.filter(i => i.status === 'new').length}
              </div>
              <div className="text-slate-300 text-sm">Neue Anfragen</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-white">
                {totalValue.toLocaleString('de-DE')} €
              </div>
              <div className="text-slate-300 text-sm">Gesamtwert</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-white">
                {filteredInquiries.filter(i => i.product_type === 'HB10').length} / {filteredInquiries.filter(i => i.product_type === 'HB8').length}
              </div>
              <div className="text-slate-300 text-sm">HB10 / HB8</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Produkt:</label>
                <div className="flex gap-2">
                  <Button
                    variant={filter === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter('all')}
                    className={filter === 'all' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'}
                  >
                    Alle
                  </Button>
                  <Button
                    variant={filter === 'HB8' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter('HB8')}
                    className={filter === 'HB8' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'}
                  >
                    HB8
                  </Button>
                  <Button
                    variant={filter === 'HB10' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter('HB10')}
                    className={filter === 'HB10' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'}
                  >
                    HB10
                  </Button>
                </div>
              </div>
              
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Status:</label>
                <div className="flex gap-2">
                  <Button
                    variant={statusFilter === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setStatusFilter('all')}
                    className={statusFilter === 'all' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'}
                  >
                    Alle
                  </Button>
                  <Button
                    variant={statusFilter === 'new' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setStatusFilter('new')}
                    className={statusFilter === 'new' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'}
                  >
                    Neu
                  </Button>
                  <Button
                    variant={statusFilter === 'contacted' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setStatusFilter('contacted')}
                    className={statusFilter === 'contacted' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'}
                  >
                    Kontaktiert
                  </Button>
                  <Button
                    variant={statusFilter === 'closed' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setStatusFilter('closed')}
                    className={statusFilter === 'closed' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'}
                  >
                    Abgeschlossen
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inquiries List */}
        <div className="space-y-4">
          {filteredInquiries.map((inquiry) => (
            <Card key={inquiry.id} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-lg">
                      {inquiry.customer_name} - {inquiry.product_type}
                    </CardTitle>
                    <p className="text-slate-300 text-sm">
                      {format(new Date(inquiry.created_at), 'dd.MM.yyyy HH:mm', { locale: de })}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Badge className={getStatusColor(inquiry.status)}>
                      {getStatusText(inquiry.status)}
                    </Badge>
                    <div className="text-white font-semibold">
                      {inquiry.product_price.toLocaleString('de-DE')} €
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div>
                    <strong className="text-white">E-Mail:</strong>
                    <p className="text-slate-300">{inquiry.customer_email}</p>
                  </div>
                  {inquiry.customer_phone && (
                    <div>
                      <strong className="text-white">Telefon:</strong>
                      <p className="text-slate-300">{inquiry.customer_phone}</p>
                    </div>
                  )}
                  {inquiry.customer_company && (
                    <div>
                      <strong className="text-white">Unternehmen:</strong>
                      <p className="text-slate-300">{inquiry.customer_company}</p>
                    </div>
                  )}
                  {inquiry.customer_address && (
                    <div>
                      <strong className="text-white">Adresse:</strong>
                      <p className="text-slate-300">
                        {inquiry.customer_address}
                        {inquiry.customer_city && `, ${inquiry.customer_city}`}
                        {inquiry.customer_zip && ` ${inquiry.customer_zip}`}
                      </p>
                    </div>
                  )}
                </div>
                
                {inquiry.message && (
                  <div className="mb-4">
                    <strong className="text-white">Nachricht:</strong>
                    <p className="text-slate-300 mt-1 whitespace-pre-line">{inquiry.message}</p>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={inquiry.status === 'new' ? 'default' : 'outline'}
                    onClick={() => handleStatusChange(inquiry.id, 'new')}
                    className={inquiry.status === 'new' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'}
                  >
                    Neu
                  </Button>
                  <Button
                    size="sm"
                    variant={inquiry.status === 'contacted' ? 'default' : 'outline'}
                    onClick={() => handleStatusChange(inquiry.id, 'contacted')}
                    className={inquiry.status === 'contacted' ? 'bg-slate-600 text-white hover:bg-slate-700' : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'}
                  >
                    Kontaktiert
                  </Button>
                  <Button
                    size="sm"
                    variant={inquiry.status === 'closed' ? 'default' : 'outline'}
                    onClick={() => handleStatusChange(inquiry.id, 'closed')}
                    className={inquiry.status === 'closed' ? 'bg-green-700 text-white hover:bg-green-800' : 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white'}
                  >
                    Abgeschlossen
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredInquiries.length === 0 && (
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-12 text-center">
              <p className="text-slate-300">Keine Anfragen gefunden.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
