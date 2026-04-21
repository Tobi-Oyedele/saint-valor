import api from "@/lib/axios";
import { Product } from "@/types/product";
import { Pagination } from "@/types/pagination";

export async function getAllProducts(
  page = 1,
): Promise<{ products: Product[]; pagination: Pagination }> {
  try {
    const res = await api.get("/admin/products", { params: { page } });
    return {
      products: res.data.data.products,
      pagination: res.data.pagination,
    };
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch products.",
    );
  }
}

export async function createProduct(formData: FormData): Promise<Product> {
  const res = await api.post("/admin/products", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data.product;
}

export async function updateProduct(
  id: string,
  payload: {
    productName: string;
    productDescription: string;
    productPrice: number;
    productJewelryType: string;
    productMaterial: string;
    productKarat: string;
    productGender: string;
  },
): Promise<Product> {
  const res = await api.put(`/admin/products/${id}`, payload);
  return res.data.data.product;
}

export async function deleteProduct(id: string): Promise<void> {
  await api.delete(`/admin/products/${id}`);
}
