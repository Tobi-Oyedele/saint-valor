"use client";

import { UserRound, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("token");
  });
  const [userName, setUserName] = useState(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("firstName");
  });

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await fetch(
        "https://saint-valor-backend.onrender.com/api/v1/auth/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      localStorage.removeItem("token");
      localStorage.removeItem("firstName");
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setIsLoggedIn(false);
      setUserName(null);

      if (response.ok) {
        toast.success("Logged out successfully!");
        setIsOpen(false);
        router.push("/");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const itemClass =
    "block w-full text-left px-3 py-2 text-sm hover:bg-black/5 transition cursor-pointer";

  return (
    <div ref={wrapperRef} className="relative inline-block">
      <button
        type="button"
        className="flex items-center justify-center h-10 text-burgundy cursor-pointer"
        aria-label="Open user menu"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isLoggedIn && userName && (
          <span className="text-sm mr-2">Welcome, {userName}</span>
        )}
        <UserRound className="w-6 h-6" />
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-28 rounded-md border border-black/10 bg-white shadow-lg overflow-hidden z-50"
          role="listbox"
          aria-label="Profile options"
        >
          {isLoggedIn ? (
            <>
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className={itemClass}
              >
                My Profile
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className={itemClass}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                onClick={() => setIsOpen(false)}
                className={itemClass}
              >
                Log in
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setIsOpen(false)}
                className={itemClass}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
