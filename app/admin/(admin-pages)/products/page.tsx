import ProductsTable from "../../_components/adminProducts/ProductsTable";

const ProductsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold p-6 text-charcoal">Products</h1>
      <ProductsTable />
    </div>
  );
};

export default ProductsPage;
