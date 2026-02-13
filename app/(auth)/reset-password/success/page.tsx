import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ResetPasswordSuccess() {
  return (
    <main className="flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 md:p-10 rounded-2xl">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Success Icon */}
          <Image
            src="/images/password-success.png"
            alt="Password Success"
            width={200}
            height={200}
          />

          {/* Text Content */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
              Password Changed
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-sm mx-auto px-2">
              Your password has been changed. Please use your new password when
              logging in
            </p>
          </div>

          {/* Button */}
          <div className="w-full pt-2">
            <Link href="/sign-in" className="block w-full">
              <Button label="Go To Sign In" fullWidth />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
