
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import type { Tables, TablesInsert } from '@/integrations/supabase/types';

export type ProductInquiry = Tables<'product_inquiries'>;
export type ProductInquiryInsert = TablesInsert<'product_inquiries'>;

export const useProductInquiries = () => {
  const queryClient = useQueryClient();

  const createInquiry = useMutation({
    mutationFn: async (inquiry: Omit<ProductInquiryInsert, 'id' | 'created_at' | 'updated_at' | 'status'>) => {
      const { data, error } = await supabase
        .from('product_inquiries')
        .insert(inquiry)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product-inquiries'] });
      toast.success('Anfrage erfolgreich gesendet!', {
        description: 'Wir werden uns in Kürze bei Ihnen melden.',
        style: {
          background: '#1e293b',
          border: '1px solid #334155',
          color: '#f1f5f9',
        },
      });
    },
    onError: (error) => {
      console.error('Error creating inquiry:', error);
      toast.error('Fehler beim Senden der Anfrage', {
        description: 'Bitte versuchen Sie es später erneut.',
        style: {
          background: '#1e293b',
          border: '1px solid #ef4444',
          color: '#f1f5f9',
        },
      });
    },
  });

  const fetchInquiries = useQuery({
    queryKey: ['product-inquiries'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('product_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as ProductInquiry[];
    },
  });

  const updateInquiryStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
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
      queryClient.invalidateQueries({ queryKey: ['product-inquiries'] });
      toast.success('Status erfolgreich aktualisiert', {
        style: {
          background: '#1e293b',
          border: '1px solid #334155',
          color: '#f1f5f9',
        },
      });
    },
    onError: (error) => {
      console.error('Error updating inquiry status:', error);
      toast.error('Fehler beim Aktualisieren des Status', {
        style: {
          background: '#1e293b',
          border: '1px solid #ef4444',
          color: '#f1f5f9',
        },
      });
    },
  });

  return {
    createInquiry,
    inquiries: fetchInquiries.data || [],
    isLoading: fetchInquiries.isLoading,
    error: fetchInquiries.error,
    updateInquiryStatus,
  };
};
