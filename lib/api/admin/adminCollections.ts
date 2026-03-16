import api from "@/lib/axios";
import { Collection } from "@/types/product";

export async function getAllCollections(): Promise<Collection[]> {
  const res = await api.get("/admin/collections");
  return res.data.data.collections;
}

export async function deleteCollection(data: { _id: string }): Promise<void> {
  await api.delete(`/admin/collections/${data._id}`);
}

export async function updateCollection(data: {
  _id: string;
  name: string;
  image?: File;
}): Promise<Collection> {
  const formData = new FormData();
  formData.append("name", data.name);
  if (data.image) formData.append("image", data.image);
  const res = await api.put(`/admin/collections/${data._id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data.collection;
}

export async function addNewCollection(data: {
  name: string;
  image?: File;
}): Promise<Collection> {
  const formData = new FormData();
  formData.append("name", data.name);
  if (data.image) formData.append("image", data.image);
  const res = await api.post("/admin/collections", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data.collection;
}
