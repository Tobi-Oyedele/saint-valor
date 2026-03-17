import { create } from "zustand";
import { toast } from "react-toastify";
import {
  addFavourite,
  removeFavourite,
  getFavourites,
} from "@/lib/api/favourites";
import { Product } from "@/types/product";
import { useAuthStore } from "./authStore";

interface FavouriteItem {
  _id: string;
  userId: string;
  productId: Product;
  createdAt: string;
}

interface FavouritesStore {
  favouriteIds: Set<string>;
  favourites: Product[];
  isLoading: boolean;
  fetchFavourites: () => Promise<void>;
  toggleFavourite: (productId: string) => Promise<void>;
  showAuthModal: boolean;
  setShowAuthModal: (val: boolean) => void;
}

export const useFavouritesStore = create<FavouritesStore>((set, get) => ({
  favouriteIds: new Set(),
  favourites: [],
  isLoading: false,
  showAuthModal: false,
  setShowAuthModal: (val) => set({ showAuthModal: val }),

  fetchFavourites: async () => {
    try {
      set({ isLoading: true });
      const data = await getFavourites();
      const ids = new Set<string>(
        data.map((f: FavouriteItem) => f.productId._id),
      );
      const products: Product[] = data.map((f: FavouriteItem) => f.productId);
      set({ favouriteIds: ids, favourites: products });
    } catch {
      // fail silently if not logged in
    } finally {
      set({ isLoading: false });
    }
  },

  toggleFavourite: async (productId: string) => {
    const { favouriteIds, favourites } = get();
    const isFavourited = favouriteIds.has(productId);
    const { isLoggedIn } = useAuthStore.getState();
    if (!isLoggedIn) {
      set({ showAuthModal: true });
      return;
    }

    // optimistic update
    const updatedIds = new Set(favouriteIds);
    const updatedProducts = isFavourited
      ? favourites.filter((p) => p._id !== productId)
      : favourites; // new product added - refetch will handle it

    if (isFavourited) {
      updatedIds.delete(productId);
    } else {
      updatedIds.add(productId);
    }

    set({ favouriteIds: updatedIds, favourites: updatedProducts });

    try {
      if (isFavourited) {
        await removeFavourite(productId);
      } else {
        await addFavourite(productId);
        // refetch to get full product data for the new favourite
        await get().fetchFavourites();
      }
    } catch {
      // revert on failure
      set({ favouriteIds, favourites });
      toast.error("Something went wrong. Please try again.");
    }
  },
}));
