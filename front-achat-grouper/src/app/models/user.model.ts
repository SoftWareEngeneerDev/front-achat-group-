export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'member' | 'supplier' | 'admin';
  avatar?: string;
  createdAt: Date;
}