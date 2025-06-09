
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface ProductInquiry {
  id: string;
  product_type: 'HB8' | 'HB10';
  product_price: number;
  quantity: number;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  customer_company?: string;
  customer_address?: string;
  customer_city?: string;
  customer_zip?: string;
  message?: string;
  status: 'new' | 'contacted' | 'closed';
  created_at: string;
  updated_at: string;
}

export const useProductInquiries = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: inquiries, isLoading } = useQuery({
    queryKey: ['productInquiries'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('product_inquiries')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as ProductInquiry[];
    },
  });

  const createInquiry = useMutation({
    mutationFn: async (inquiry: Omit<ProductInquiry, 'id' | 'status' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('product_inquiries')
        .insert([inquiry])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['productInquiries'] });
      toast({
        title: "Erfolgreich gesendet",
        description: "Ihre Anfrage wurde erfolgreich übermittelt.",
      });
    },
    onError: (error) => {
      toast({
        title: "Fehler",
        description: "Fehler beim Senden der Anfrage. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
      console.error('Error creating inquiry:', error);
    },
  });

  const updateInquiryStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: 'new' | 'contacted' | 'closed' }) => {
      const { data, error } = await supabase
        .from('product_inquiries')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['productInquiries'] });
      toast({
        title: "Status aktualisiert",
        description: "Der Status der Anfrage wurde erfolgreich geändert.",
      });
    },
    onError: (error) => {
      toast({
        title: "Fehler",
        description: "Fehler beim Aktualisieren des Status.",
        variant: "destructive",
      });
      console.error('Error updating inquiry status:', error);
    },
  });

  return {
    inquiries: inquiries || [],
    isLoading,
    createInquiry,
    updateInquiryStatus,
  };
};
