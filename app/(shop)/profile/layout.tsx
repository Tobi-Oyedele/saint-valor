"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import ProfileTabs from "@/components/profile/ProfileTabs";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
      return;
    }
  }, [isLoggedIn, router]);

  return (
    <div className="min-h-screen bg-ivory">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <ProfileTabs />
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
