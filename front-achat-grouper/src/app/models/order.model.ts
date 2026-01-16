export interface Order {
  id: string;
  userId: string;
  groupId: string;
  productId: string;
  quantity: number;
  price: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
}