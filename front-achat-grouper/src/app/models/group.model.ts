export interface Group {
  id: string;
  productId: string;
  name: string;
  currentMembers: number;
  maxMembers: number;
  minMembers: number;
  status: 'active' | 'completed' | 'cancelled';
  endDate: Date;
  createdBy: string;
  members: string[];
  createdAt: Date;
}
