"use client";

import Link from "next/link";
import { Heart, X } from "lucide-react";
import { useFavouritesStore } from "@/store/favouritesStore";

const AuthPromptModal = () => {
  const { showAuthModal, setShowAuthModal } = useFavouritesStore();

  if (!showAuthModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl p-8 w-full max-w-sm shadow-xl text-center">
        <button
          onClick={() => setShowAuthModal(false)}
          className="absolute top-4 right-4 text-secondary hover:text-charcoal transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-50 mx-auto mb-4">
          <Heart className="w-6 h-6 stroke-red-400" />
        </div>

        <h2 className="text-base font-semibold text-charcoal mb-2">
          Sign in to add to favourites
        </h2>
        <p className="text-sm text-secondary mb-6">
          Create an account or sign in to start saving your favourite pieces.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/sign-in"
            onClick={() => setShowAuthModal(false)}
            className="w-full py-2.5 bg-gold text-white text-sm font-medium rounded-md hover:opacity-90 transition text-center"
          >
            Sign In
          </Link>
          <button
            onClick={() => setShowAuthModal(false)}
            className="w-full py-2.5 border border-border text-charcoal text-sm rounded-md hover:bg-ivory transition cursor-pointer"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPromptModal;
