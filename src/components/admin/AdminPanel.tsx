
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useProductInquiries, type ProductInquiry } from "@/hooks/useProductInquiries";
import InquiryTable from "./InquiryTable";
import InquiryDetailDialog from "./InquiryDetailDialog";

const AdminPanel = () => {
  const { inquiries, isLoading, updateInquiryStatus } = useProductInquiries();
  const [filter, setFilter] = useState<'all' | 'HB8' | 'HB10'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'closed'>('all');
  const [selectedInquiry, setSelectedInquiry] = useState<ProductInquiry | null>(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);

  const filteredInquiries = inquiries.filter(inquiry => {
    const productMatch = filter === 'all' || inquiry.product_type === filter;
    const statusMatch = statusFilter === 'all' || inquiry.status === statusFilter;
    return productMatch && statusMatch;
  });

  const totalValue = filteredInquiries.reduce((sum, inquiry) => sum + inquiry.product_price, 0);

  const handleStatusChange = (id: string, newStatus: 'new' | 'contacted' | 'closed') => {
    updateInquiryStatus.mutate({ id, status: newStatus });
  };

  const handleViewDetails = (inquiry: ProductInquiry) => {
    setSelectedInquiry(inquiry);
    setDetailDialogOpen(true);
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
                    className={filter === 'all' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-transparent border-blue-600 text-blue-400 hover:bg-blue-600/20 hover:text-blue-300 hover:border-blue-500'}
                  >
                    Alle
                  </Button>
                  <Button
                    variant={filter === 'HB8' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter('HB8')}
                    className={filter === 'HB8' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500'}
                  >
                    HB8
                  </Button>
                  <Button
                    variant={filter === 'HB10' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter('HB10')}
                    className={filter === 'HB10' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500'}
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
                    className={statusFilter === 'all' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-transparent border-blue-600 text-blue-400 hover:bg-blue-600/20 hover:text-blue-300 hover:border-blue-500'}
                  >
                    Alle
                  </Button>
                  <Button
                    variant={statusFilter === 'new' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setStatusFilter('new')}
                    className={statusFilter === 'new' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500'}
                  >
                    Neu
                  </Button>
                  <Button
                    variant={statusFilter === 'contacted' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setStatusFilter('contacted')}
                    className={statusFilter === 'contacted' ? 'bg-slate-600 text-white hover:bg-slate-500' : 'bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500'}
                  >
                    Kontaktiert
                  </Button>
                  <Button
                    variant={statusFilter === 'closed' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setStatusFilter('closed')}
                    className={statusFilter === 'closed' ? 'bg-green-700 text-white hover:bg-green-600' : 'bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500'}
                  >
                    Abgeschlossen
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inquiries Table */}
        {filteredInquiries.length > 0 ? (
          <InquiryTable 
            inquiries={filteredInquiries}
            onStatusChange={handleStatusChange}
            onViewDetails={handleViewDetails}
          />
        ) : (
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-12 text-center">
              <p className="text-slate-300">Keine Anfragen gefunden.</p>
            </CardContent>
          </Card>
        )}

        {/* Detail Dialog */}
        <InquiryDetailDialog
          inquiry={selectedInquiry}
          open={detailDialogOpen}
          onOpenChange={setDetailDialogOpen}
          onStatusChange={handleStatusChange}
        />
      </div>
    </div>
  );
};

export default AdminPanel;
