import { format } from "date-fns";
import { de } from "date-fns/locale";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type ProductInquiry } from "@/hooks/useProductInquiries";

interface InquiryDetailDialogProps {
  inquiry: ProductInquiry | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStatusChange: (id: string, status: 'new' | 'contacted' | 'closed') => void;
}

const InquiryDetailDialog = ({ inquiry, open, onOpenChange, onStatusChange }: InquiryDetailDialogProps) => {
  if (!inquiry) return null;

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

  const unitPrice = inquiry.product_price / (inquiry.quantity || 1);
  const totalPrice = inquiry.product_price;
  const customerType = inquiry.customer_company ? 'Geschäftskunde' : 'Privatkunde';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-800 border-slate-700 max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">
            Anfrage Details - {inquiry.customer_name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header Info */}
          <div className="flex justify-between items-start">
            <div>
              <div className="text-lg font-semibold text-white">{inquiry.product_type}</div>
              <div className="text-slate-300">
                {format(new Date(inquiry.created_at), 'dd.MM.yyyy HH:mm', { locale: de })}
              </div>
              <div className="text-sm text-slate-400 mt-1">{customerType}</div>
            </div>
            <div className="text-right">
              <Badge className={getStatusColor(inquiry.status)}>
                {getStatusText(inquiry.status)}
              </Badge>
            </div>
          </div>

          {/* Product Information */}
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
            <h3 className="text-white font-semibold mb-3">Produktinformationen</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-slate-400 text-sm">Produkt:</label>
                <div className="text-white font-medium">{inquiry.product_type}</div>
              </div>
              <div>
                <label className="text-slate-400 text-sm">Anzahl:</label>
                <div className="text-white font-medium">{inquiry.quantity || 1} Stück</div>
              </div>
              <div>
                <label className="text-slate-400 text-sm">Einzelpreis:</label>
                <div className="text-white">{unitPrice.toLocaleString('de-DE')} €</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Gesamtpreis:</span>
                <span className="text-2xl font-bold text-white">
                  {totalPrice.toLocaleString('de-DE')} €
                </span>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Kundendaten</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-slate-400 text-sm">Name:</label>
                  <div className="text-white">{inquiry.customer_name}</div>
                </div>
                <div>
                  <label className="text-slate-400 text-sm">E-Mail:</label>
                  <div className="text-white">{inquiry.customer_email}</div>
                </div>
                {inquiry.customer_phone && (
                  <div>
                    <label className="text-slate-400 text-sm">Telefon:</label>
                    <div className="text-white">{inquiry.customer_phone}</div>
                  </div>
                )}
                <div>
                  <label className="text-slate-400 text-sm">Kundentyp:</label>
                  <div className="text-white">{customerType}</div>
                </div>
                {inquiry.customer_company && (
                  <div>
                    <label className="text-slate-400 text-sm">Unternehmen:</label>
                    <div className="text-white">{inquiry.customer_company}</div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">Adresse</h3>
              {inquiry.customer_address ? (
                <div className="space-y-3">
                  <div>
                    <label className="text-slate-400 text-sm">Straße:</label>
                    <div className="text-white">{inquiry.customer_address}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {inquiry.customer_zip && (
                      <div>
                        <label className="text-slate-400 text-sm">PLZ:</label>
                        <div className="text-white">{inquiry.customer_zip}</div>
                      </div>
                    )}
                    {inquiry.customer_city && (
                      <div>
                        <label className="text-slate-400 text-sm">Stadt:</label>
                        <div className="text-white">{inquiry.customer_city}</div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-slate-400">Keine Adresse angegeben</div>
              )}
            </div>
          </div>

          {/* Message */}
          {inquiry.message && (
            <div>
              <h3 className="text-white font-semibold mb-2">Nachricht</h3>
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                <div className="text-slate-300 whitespace-pre-line">{inquiry.message}</div>
              </div>
            </div>
          )}

          {/* Status Actions */}
          <div>
            <h3 className="text-white font-semibold mb-3">Status ändern</h3>
            <div className="flex gap-2">
              <Button
                variant={inquiry.status === 'new' ? 'default' : 'outline'}
                onClick={() => onStatusChange(inquiry.id, 'new')}
                className={inquiry.status === 'new' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500'}
              >
                Neu
              </Button>
              <Button
                variant={inquiry.status === 'contacted' ? 'default' : 'outline'}
                onClick={() => onStatusChange(inquiry.id, 'contacted')}
                className={inquiry.status === 'contacted' ? 'bg-slate-600 text-white hover:bg-slate-500' : 'bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500'}
              >
                Kontaktiert
              </Button>
              <Button
                variant={inquiry.status === 'closed' ? 'default' : 'outline'}
                onClick={() => onStatusChange(inquiry.id, 'closed')}
                className={inquiry.status === 'closed' ? 'bg-green-700 text-white hover:bg-green-600' : 'bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500'}
              >
                Abgeschlossen
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryDetailDialog;
