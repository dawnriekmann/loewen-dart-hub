
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProductInquiries } from "@/hooks/useProductInquiries";
import { X } from "lucide-react";

interface ProductInquiryFormProps {
  productType: 'HB8' | 'HB10';
  productPrice: number;
  onClose: () => void;
  isOpen: boolean;
}

const ProductInquiryForm = ({ productType, productPrice, onClose, isOpen }: ProductInquiryFormProps) => {
  const { createInquiry } = useProductInquiries();
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    customer_company: '',
    customer_address: '',
    customer_city: '',
    customer_zip: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const inquiryData = {
      product_type: productType,
      product_price: productPrice,
      ...formData
    };

    createInquiry.mutate(inquiryData, {
      onSuccess: () => {
        setFormData({
          customer_name: '',
          customer_email: '',
          customer_phone: '',
          customer_company: '',
          customer_address: '',
          customer_city: '',
          customer_zip: '',
          message: ''
        });
        onClose();
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-2xl text-slate-800 pr-8">
            Produktanfrage - LÖWEN DART {productType}
          </CardTitle>
          <p className="text-slate-600">
            Preis: {productPrice.toLocaleString('de-DE')} €
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customer_name">Name *</Label>
                <Input
                  id="customer_name"
                  name="customer_name"
                  value={formData.customer_name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="customer_email">E-Mail *</Label>
                <Input
                  id="customer_email"
                  name="customer_email"
                  type="email"
                  value={formData.customer_email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customer_phone">Telefon</Label>
                <Input
                  id="customer_phone"
                  name="customer_phone"
                  value={formData.customer_phone}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="customer_company">Unternehmen</Label>
                <Input
                  id="customer_company"
                  name="customer_company"
                  value={formData.customer_company}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="customer_address">Adresse</Label>
              <Input
                id="customer_address"
                name="customer_address"
                value={formData.customer_address}
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customer_city">Stadt</Label>
                <Input
                  id="customer_city"
                  name="customer_city"
                  value={formData.customer_city}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="customer_zip">PLZ</Label>
                <Input
                  id="customer_zip"
                  name="customer_zip"
                  value={formData.customer_zip}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message">Nachricht</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Teilen Sie uns Ihre Wünsche oder Fragen mit..."
                className="mt-1"
                rows={4}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                disabled={createInquiry.isPending}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                {createInquiry.isPending ? 'Wird gesendet...' : 'Anfrage senden'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Abbrechen
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductInquiryForm;
