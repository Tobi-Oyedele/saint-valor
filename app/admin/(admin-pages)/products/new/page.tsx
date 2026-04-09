import ProductForm from "@/app/admin/_components/adminProducts/ProductForm";

const NewProductsPage = () => {
  return (
    <div className="flex flex-col gap-6 pb-6">
      <h1 className="text-xl font-semibold p-6 text-charcoal">
        Create A New Product
      </h1>
      <ProductForm />
    </div>
  );
};

export default NewProductsPage;
