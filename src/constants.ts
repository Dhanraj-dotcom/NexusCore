import { Product, Sale, User } from './types';

export const products: Product[] = [
  { id: '1', name: 'Precision Processor X1', sku: 'CPU-001', category: 'Hardware', stock: 125, price: 299.99, status: 'In Stock' },
  { id: '2', name: 'High-Density RAM 32GB', sku: 'MEM-032', category: 'Hardware', stock: 12, price: 149.99, status: 'Low Stock' },
  { id: '3', name: 'Nexus SSD 1TB', sku: 'STG-001', category: 'Hardware', stock: 45, price: 89.99, status: 'In Stock' },
  { id: '4', name: 'Cloud Core License', sku: 'SFT-042', category: 'Software', stock: 0, price: 499.00, status: 'Out of Stock' },
  { id: '5', name: 'Quiet Cooling Unit', sku: 'CLR-005', category: 'Cooling', stock: 88, price: 34.50, status: 'In Stock' },
];

export const sales: Sale[] = [
  { id: 'ORD-1001', customer: 'Global Tech Solutions', date: '2024-10-22', amount: 12450.00, items: 42, status: 'Completed' },
  { id: 'ORD-1002', customer: 'DataSphere Inc', date: '2024-10-21', amount: 3420.50, items: 12, status: 'Pending' },
  { id: 'ORD-1003', customer: 'Nexus Labs', date: '2024-10-21', amount: 890.00, items: 5, status: 'Completed' },
  { id: 'ORD-1004', customer: 'Quantum Systems', date: '2024-10-20', amount: 5670.00, items: 15, status: 'Cancelled' },
];

export const users: User[] = [
  { id: 'U-001', name: 'Admin User', email: 'admin@nexuscore.com', role: 'Admin', lastActive: '2 mins ago' },
  { id: 'U-002', name: 'Sarah Chen', email: 's.chen@nexuscore.com', role: 'Manager', lastActive: '1 hour ago' },
  { id: 'U-003', name: 'Michael Ross', email: 'm.ross@nexuscore.com', role: 'User', lastActive: '3 days ago' },
];
