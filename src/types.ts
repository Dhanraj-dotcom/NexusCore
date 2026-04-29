/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  price: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface Sale {
  id: string;
  customer: string;
  date: string;
  amount: number;
  items: number;
  status: 'Completed' | 'Pending' | 'Cancelled';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'User';
  lastActive: string;
}
