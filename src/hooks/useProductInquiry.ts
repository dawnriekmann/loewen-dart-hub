
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface InquiryData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string;
  customerType: 'privat' | 'gewerbe';
  quantity: number;
  product: 'HB8' | 'HB10';
  unitPrice: number;
}

export const useProductInquiry = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const submitInquiry = async (data: InquiryData) => {
    setLoading(true);
    
    try {
      const totalPrice = data.unitPrice * data.quantity;
      
      const { error } = await supabase
        .from('product_inquiries')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          company_name: data.companyName || null,
          customer_type: data.customerType,
          product: data.product,
          quantity: data.quantity,
          unit_price: data.unitPrice,
          total_price: totalPrice,
        });

      if (error) throw error;

      toast({
        title: 'Anfrage erfolgreich gesendet!',
        description: `Ihre Anfrage für den ${data.product} wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.`,
      });

      return { success: true };
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast({
        title: 'Fehler beim Senden',
        description: 'Ihre Anfrage konnte nicht übermittelt werden. Bitte versuchen Sie es erneut.',
        variant: 'destructive',
      });
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  return { submitInquiry, loading };
};
