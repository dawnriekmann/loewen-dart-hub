
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, ShoppingCart } from "lucide-react";
import ProductInquiryForm from "./ProductInquiryForm";

interface ProductInquiryButtonProps {
  productType: 'HB8' | 'HB10';
  productPrice: number;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  showIcon?: boolean;
}

const ProductInquiryButton = ({ 
  productType, 
  productPrice, 
  variant = 'default',
  size = 'default',
  className = '',
  showIcon = true
}: ProductInquiryButtonProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsFormOpen(true)}
        variant={variant}
        size={size}
        className={className}
      >
        {showIcon && <ShoppingCart className="w-4 h-4 mr-2" />}
        Jetzt anfragen
      </Button>
      
      <ProductInquiryForm
        productType={productType}
        productPrice={productPrice}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
};

export default ProductInquiryButton;
