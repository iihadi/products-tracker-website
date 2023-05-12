export const navigations = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
  },
  {
    name: 'Products',
    icon: 'local_grocery_store',
    children: [
      {
        name: 'Add New',
        path: '/product/add',
        icon: 'add',
      }
    ]
  }
];
