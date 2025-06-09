
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
            <TableHead className="text-slate-300">Datum</TableHead>
            <TableHead className="text-slate-300">Kunde</TableHead>
            <TableHead className="text-slate-300">Produkt</TableHead>
            <TableHead className="text-slate-300">Preis</TableHead>
            <TableHead className="text-slate-300">Status</TableHead>
            <TableHead className="text-slate-300">Aktionen</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inquiries.map((inquiry) => (
            <TableRow key={inquiry.id} className="border-slate-700 hover:bg-slate-750">
              <TableCell className="text-slate-300">
                {format(new Date(inquiry.created_at), 'dd.MM.yyyy', { locale: de })}
              </TableCell>
              <TableCell>
                <div className="text-white font-medium">{inquiry.customer_name}</div>
                <div className="text-slate-400 text-sm">{inquiry.customer_email}</div>
              </TableCell>
              <TableCell className="text-white">{inquiry.product_type}</TableCell>
              <TableCell className="text-white font-semibold">
                {inquiry.product_price.toLocaleString('de-DE')} €
              </TableCell>
              <TableCell>
                <Badge className={getStatusColor(inquiry.status)}>
                  {getStatusText(inquiry.status)}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onViewDetails(inquiry)}
                    className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant={inquiry.status === 'new' ? 'default' : 'outline'}
                      onClick={() => onStatusChange(inquiry.id, 'new')}
                      className={inquiry.status === 'new' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500'}
                    >
                      N
                    </Button>
                    <Button
                      size="sm"
                      variant={inquiry.status === 'contacted' ? 'default' : 'outline'}
                      onClick={() => onStatusChange(inquiry.id, 'contacted')}
                      className={inquiry.status === 'contacted' ? 'bg-slate-600 text-white hover:bg-slate-500' : 'bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500'}
                    >
                      K
                    </Button>
                    <Button
                      size="sm"
                      variant={inquiry.status === 'closed' ? 'default' : 'outline'}
                      onClick={() => onStatusChange(inquiry.id, 'closed')}
                      className={inquiry.status === 'closed' ? 'bg-green-700 text-white hover:bg-green-600' : 'bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500'}
                    >
                      A
                    </Button>
                  </div>
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
