
import { useState } from "react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductInquiry } from "@/hooks/useProductInquiries";

interface InquiryTableProps {
  inquiries: ProductInquiry[];
  onStatusChange: (id: string, status: 'new' | 'contacted' | 'closed') => void;
  onViewDetails: (inquiry: ProductInquiry) => void;
}

const InquiryTable = ({ inquiries, onStatusChange, onViewDetails }: InquiryTableProps) => {
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

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg">
      <Table>
        <TableHeader>
          <TableRow className="border-slate-700 hover:bg-slate-750">
            <TableHead className="text-slate-300">Datum & Uhrzeit</TableHead>
            <TableHead className="text-slate-300">Unternehmen</TableHead>
            <TableHead className="text-slate-300">Name & E-Mail</TableHead>
            <TableHead className="text-slate-300">Telefonnummer</TableHead>
            <TableHead className="text-slate-300">Produkt & Anzahl</TableHead>
            <TableHead className="text-slate-300">Preis</TableHead>
            <TableHead className="text-slate-300">Status</TableHead>
            <TableHead className="text-slate-300">Aktionen</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inquiries.map((inquiry) => (
            <TableRow key={inquiry.id} className="border-slate-700 hover:bg-slate-750">
              <TableCell className="text-slate-300">
                <div>{format(new Date(inquiry.created_at), 'dd.MM.yyyy', { locale: de })}</div>
                <div className="text-sm">{format(new Date(inquiry.created_at), 'HH:mm', { locale: de })}</div>
              </TableCell>
              <TableCell>
                <div className="text-white font-medium">
                  {inquiry.customer_company || 'PRIVAT'}
                </div>
              </TableCell>
              <TableCell>
                <div className="text-white font-medium">{inquiry.customer_name}</div>
                <div className="text-slate-400 text-sm">{inquiry.customer_email}</div>
              </TableCell>
              <TableCell className="text-slate-300">
                {inquiry.customer_phone || '-'}
              </TableCell>
              <TableCell>
                <div className="text-white font-medium">{inquiry.product_type}</div>
                <div className="text-slate-400 text-sm">1x Stück</div>
              </TableCell>
              <TableCell>
                <div className="text-white font-semibold">
                  {inquiry.product_price.toLocaleString('de-DE')} €
                </div>
                <div className="text-slate-400 text-sm">Einzelpreis</div>
              </TableCell>
              <TableCell>
                <Badge className={getStatusColor(inquiry.status)}>
                  {getStatusText(inquiry.status)}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onViewDetails(inquiry)}
                    className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Select
                    value={inquiry.status}
                    onValueChange={(value: 'new' | 'contacted' | 'closed') => onStatusChange(inquiry.id, value)}
                  >
                    <SelectTrigger className="w-32 bg-slate-700 border-slate-600 text-slate-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="new" className="text-slate-300 focus:bg-slate-600 focus:text-white">
                        Neu
                      </SelectItem>
                      <SelectItem value="contacted" className="text-slate-300 focus:bg-slate-600 focus:text-white">
                        Kontaktiert
                      </SelectItem>
                      <SelectItem value="closed" className="text-slate-300 focus:bg-slate-600 focus:text-white">
                        Abgeschlossen
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InquiryTable;
