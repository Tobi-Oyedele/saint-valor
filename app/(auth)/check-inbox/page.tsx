import { Suspense } from "react";
import EmailVerification from "@/components/auth/EmailVerification";
import AuthWrapper from "@/components/auth/AuthWrapper";

export default function CheckInboxPage() {
  return (
    <AuthWrapper>
      <Suspense>
        <EmailVerification />
      </Suspense>
    </AuthWrapper>
  );
}
