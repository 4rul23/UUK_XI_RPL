import React from 'react';
import Sidebar from '../components/Sidebar';
import { Trash2, Pencil } from 'lucide-react';
import Link from 'next/link';

const InventoryPage = () => {
  const inventory = [
    { productName: 'Meja', seriesNo: 'TJ0001', category: 'Furniture', condition: 'Terpakai', location: 'Warehouse A' },
    { productName: 'Kursi', seriesNo: 'TJ0002', category: 'Furniture', condition: 'Terpakai', location: 'Warehouse B' },
    { productName: 'Laptop', seriesNo: 'TJ0015', category: 'Electronics', condition: 'Baru', location: 'Warehouse C' },
    { productName: 'Monitor', seriesNo: 'TJ1212', category: 'Electronics', condition: 'Terpakai', location: 'Warehouse A' },
    { productName: 'Keyboard', seriesNo: 'TJ0021', category: 'Electronics', condition: 'Baru', location: 'Warehouse D' },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 bg-gray-50 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-semibold text-sky-950">Inventory</h1>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-6">
            <Link href="/DataAssetUser" passHref>
              <h1 className="text-sky-950 text-2xl font-semibold cursor-pointer">All</h1>
            </Link>
            <Link href="/DataAssetAdmin" passHref>
              <h1 className="text-sky-950 text-2xl font-semibold underline underline-offset-8 cursor-pointer decoration-3">Warehouse</h1>
            </Link>
          </div>
          <button
            className="px-6 py-1 text-customBlue rounded-md border-customBlue border hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>

        <div className="bg-white rounded-lg shadow">
          <table className="w-full pt-4">
            <thead>
              <tr className="border pb-6 bg-slate-300">
                <th className="px-3 py-3 text-left font-bold text-customBlue "></th>
                <th className="px-3 py-3 text-left font-bold text-customBlue">Product Name</th>
                <th className="px-3 py-3 text-left font-bold text-customBlue">Series No.</th>
                <th className="px-3 py-3 text-left font-bold text-customBlue">Category</th>
                <th className="px-3 py-3 text-left font-bold text-customBlue">Condition</th>
                <th className="px-3 py-3 text-left font-bold text-customBlue">Storage Location</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <Pencil className="cursor-pointer ml-3 mr-6" />  
                      <Trash2 className="cursor-pointer ml-12" />
                    </div>
                  </td>
                  <td className="px-3 py-4">{item.productName}</td>
                  <td className="px-3 py-4">{item.seriesNo}</td>
                  <td className="px-3 py-4">{item.category}</td>
                  <td className="px-3 py-4">{item.condition}</td>
                  <td className="px-3 py-4">{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
