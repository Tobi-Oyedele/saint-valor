"use client";
import { ProductsTab } from "@/types/product";
import { useState } from "react";
import ProductFilterTabs from "../../_components/adminProducts/ProductFilterTabs";
import CategoriesTable from "../../_components/adminProducts/categories/CategoriesTable";
import CollectionsTable from "../../_components/adminProducts/collections/CollectionsTable";

const AdminProductsPage = () => {
  const [activeTab, setActiveTab] = useState<ProductsTab>("categories");

  return (
    <div className="min-h-screen px-6 py-8">
      <h3 className="text-2xl font-semibold mb-6 text-charcoal">Products</h3>
      <ProductFilterTabs
        activeTab={activeTab}
        onTabChange={(t) => {
          setActiveTab(t);
        }}
      />
      {activeTab === "categories" && <CategoriesTable />}
      {activeTab === "collections" && <CollectionsTable />}
    </div>
  );
};

export default AdminProductsPage;
