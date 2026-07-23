import {
  LayoutDashboard,
  Pill,
  Tags,
  ShoppingCart,
  Users,
  Boxes,
  TicketPercent,
  BarChart3,
  Settings,
} from 'lucide-react';

export const sidebarMenu = [
  {
    name: 'Dashboard',
    path: '/admin',
    icon: LayoutDashboard,
  },
  {
    name: 'Medicines',
    path: '/admin/medicines',
    icon: Pill,
  },
  {
    name: 'Categories',
    path: '/admin/categories',
    icon: Tags,
  },
  {
    name: 'Orders',
    path: '/admin/orders',
    icon: ShoppingCart,
  },
  {
    name: 'Customers',
    path: '/admin/customers',
    icon: Users,
  },
  {
    name: 'Inventory',
    path: '/admin/inventory',
    icon: Boxes,
  },
  {
    name: 'Coupons',
    path: '/admin/coupons',
    icon: TicketPercent,
  },
  {
    name: 'Reports',
    path: '/admin/reports',
    icon: BarChart3,
  },
  {
    name: 'Settings',
    path: '/admin/settings',
    icon: Settings,
  },
];
