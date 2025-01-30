"use client";
import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define TypeScript interfaces
interface Order {
  id: string;
  customerName: string;
  product: string;
  category: string;
  price: number;
  status: string;
  date: string;
}

const OrdersPage = () => {
  // Sample data
  const orders: Order[] = [
    {
      id: "ORD001",
      customerName: "John Smith",
      product: "Cotton T-Shirt",
      category: "clothing",
      price: 29.99,
      status: "Processing",
      date: "2025-01-28",
    },
    {
      id: "ORD002",
      customerName: "Emma Wilson",
      product: "Handmade Pottery Set",
      category: "craft work",
      price: 89.99,
      status: "Completed",
      date: "2025-01-29",
    },
    {
      id: "ORD003",
      customerName: "Michael Brown",
      product: "Landscape Oil Painting",
      category: "painting",
      price: 299.99,
      status: "Shipped",
      date: "2025-01-30",
    },
    {
      id: "ORD004",
      customerName: "Sarah Davis",
      product: "Custom Evening Gown",
      category: "tailoring",
      price: 399.99,
      status: "In Progress",
      date: "2025-01-30",
    },
    {
      id: "ORD005",
      customerName: "David Lee",
      product: "Silver Cutlery Set",
      category: "cutlery work",
      price: 199.99,
      status: "Pending",
      date: "2025-01-30",
    },
  ];

  const categories = [
    "All",
    "clothing",
    "craft work",
    "painting",
    "tailoring",
    "cutlery work",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter orders based on category and search term
  const filteredOrders = orders.filter((order) => {
    const matchesCategory =
      selectedCategory === "All" || order.category === selectedCategory;
    const matchesSearch =
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Orders Management</h1>

        {/* Filters and Search */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredOrders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle className="text-lg flex justify-between">
                <span>{order.product}</span>
                <span className="text-sm font-normal">{order.id}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Customer:</span>
                  <span>{order.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Category:</span>
                  <span className="capitalize">{order.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Price:</span>
                  <span>${order.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Processing"
                          ? "bg-blue-100 text-blue-800"
                          : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span>{order.date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
