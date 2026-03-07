import api from "../axios";

export const getFavourites = async () => {
  const res = await api.get("/favourites");
  return res.data.data.favourites;
};

export const addFavourite = async (productId: string) => {
  const res = await api.post("/favourites", { productId });
  return res.data;
};

export const removeFavourite = async (productId: string) => {
  const res = await api.delete(`/favourites/${productId}`);
  return res.data;
};
