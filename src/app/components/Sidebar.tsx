import React from 'react';
import Link from 'next/link';
import { Home, Package, Users, FileText } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', href: '/login' },
    { icon: <Package size={20} />, label: 'Inventory', href: '/DataAssetUser' },
    { icon: <Users size={20} />, label: 'All Account', href: '/HakAkses' },
    { icon: <FileText size={20} />, label: 'Transactions', href: '#' },
  ];

  return (
    <div className="w-64 bg-white shadow-md h-screen pt-8">
      <div className="flex flex-col">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center px-6 py-3 hover:bg-blue-50  text-customBlue"
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;