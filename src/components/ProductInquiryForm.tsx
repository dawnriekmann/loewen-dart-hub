
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { useProductInquiries } from "@/hooks/useProductInquiries";

interface ProductInquiryFormProps {
  productType: 'HB8' | 'HB10';
  basePrice: number;
  onBack: () => void;
}

export const ProductInquiryForm = ({ productType, basePrice, onBack }: ProductInquiryFormProps) => {
  const { createInquiry } = useProductInquiries();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    quantity: 1,
    customerType: "private", // "private" or "business"
    companyName: ""
  });

  const calculateTotal = () => {
    return basePrice * formData.quantity;
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, Math.min(10, formData.quantity + delta));
    setFormData(prev => ({ ...prev, quantity: newQuantity }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const inquiryData = {
      product_type: productType,
      product_price: calculateTotal(),
      customer_name: `${formData.firstName} ${formData.lastName}`,
      customer_email: formData.email,
      customer_phone: formData.phone,
      customer_company: formData.customerType === 'business' ? formData.companyName : undefined,
    };
    
    createInquiry.mutate(inquiryData);
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="text-slate-400 hover:text-white p-2"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h3 className="text-xl font-semibold text-white">Anfrage stellen</h3>
      </div>

      {/* Customer Type Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-300 mb-3">Kundentyp</label>
        <RadioGroup
          value={formData.customerType}
          onValueChange={(value) => handleInputChange("customerType", value)}
          className="flex gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="private" id="private" className="border-slate-600 text-blue-400" />
            <Label htmlFor="private" className="text-slate-300 cursor-pointer">Privat</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="business" id="business" className="border-slate-600 text-blue-400" />
            <Label htmlFor="business" className="text-slate-300 cursor-pointer">Geschäftlich</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Company Name Field - with smooth animation */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-out ${
          formData.customerType === "business" 
            ? "max-h-20 opacity-100 mb-4 animate-slide-down" 
            : "max-h-0 opacity-0 mb-0"
        }`}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-300 mb-2">Unternehmen</label>
          <Input
            value={formData.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            placeholder="Ihr Unternehmensname"
            required={formData.customerType === "business"}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Vorname</label>
          <Input
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            placeholder="Ihr Vorname"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Nachname</label>
          <Input
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            placeholder="Ihr Nachname"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-300 mb-2">E-Mail</label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
          placeholder="Ihre E-Mail Adresse"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-300 mb-2">Telefonnummer</label>
        <Input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
          placeholder="Ihre Telefonnummer"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-300 mb-2">Menge</label>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleQuantityChange(-1)}
            disabled={formData.quantity <= 1}
            className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 disabled:opacity-50 disabled:border-slate-600 disabled:text-slate-500"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="text-xl font-semibold text-white min-w-[3rem] text-center">
            {formData.quantity}
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleQuantityChange(1)}
            disabled={formData.quantity >= 10}
            className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 disabled:opacity-50 disabled:border-slate-600 disabled:text-slate-500"
          >
            <Plus className="w-4 h-4" />
          </Button>
          <span className="text-sm text-slate-400 ml-2">
            (Aktuell verfügbar)
          </span>
        </div>
      </div>

      {/* Integrated Price Calculator */}
      <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4 mb-6 animate-scale-in">
        <div className="space-y-2">
          <div className="flex justify-between text-slate-300">
            <span>Einzelpreis:</span>
            <span>{basePrice.toLocaleString()}€</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Menge:</span>
            <span>{formData.quantity}x</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Versand:</span>
            <span className="text-green-400">Kostenlos</span>
          </div>
          <Separator className="bg-slate-600" />
          <div className="flex justify-between text-lg font-semibold text-white">
            <span>Gesamtpreis:</span>
            <span>{calculateTotal().toLocaleString()}€</span>
          </div>
          <div className="text-sm text-slate-400 text-right">inkl. 19% MwSt.</div>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]"
      >
        Unverbindliche Anfrage stellen
      </Button>
    </form>
  );
};
