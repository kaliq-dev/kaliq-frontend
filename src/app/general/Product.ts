export interface Product {
  id?: number;
  name?: string;
  price?: number;
  vat?: number;
  image_list?: string[];
  supplier_name?: string;
  brand_name?: string;
  category_name?: string;
  image?: string;
  isAddToCart?: boolean;
}
