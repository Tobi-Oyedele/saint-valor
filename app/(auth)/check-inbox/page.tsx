import { Suspense } from "react";
import EmailVerification from "@/components/EmailVerification";

export default function CheckInboxPage() {
  return (
    <Suspense>
      <EmailVerification />
    </Suspense>
  );
}
