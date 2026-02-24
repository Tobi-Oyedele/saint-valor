import { Suspense } from "react";
import EmailVerification from "@/components/auth/EmailVerification";

export default function CheckInboxPage() {
  return (
    <Suspense>
      <EmailVerification />
    </Suspense>
  );
}
