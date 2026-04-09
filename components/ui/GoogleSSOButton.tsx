"use client";

import { GoogleLogin } from "@react-oauth/google";
import axiosInstance from "@/lib/axios";
import { isAxiosError } from "axios";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const GoogleSSOButton = () => {
  const { setAuth } = useAuthStore();
  const router = useRouter();

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        try {
          const { data } = await axiosInstance.post("/auth/google", {
            idToken: credentialResponse.credential,
          });

          const {
            token,
            data: { user },
          } = data;

          localStorage.setItem("token", token);
          localStorage.setItem("firstName", user.firstName);

          setAuth(user.firstName);

          toast.success("Signed in with Google!");
          router.push("/");
        } catch (error) {
          if (isAxiosError(error)) {
            // ← now works, error is narrowed
            const message =
              error.response?.data?.message || "Google sign-in failed";
            toast.error(message);
          }
        }
      }}
      onError={() => {
        toast.error("Google sign-in failed. Please try again.");
      }}
    />
  );
};

export default GoogleSSOButton;
