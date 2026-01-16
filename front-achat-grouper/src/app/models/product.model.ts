export interface Product {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  groupPrice: number;
  savings: number;
  imageUrl: string;
  categoryId: string;
  supplierId: string;
  stock: number;
  createdAt: Date;
}