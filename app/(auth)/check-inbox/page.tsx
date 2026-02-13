"use client";
import Image from "next/image";

const EmailVerification: React.FC = () => {
  const email = "abcd@gmail.com";

  const handleOpenEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleResend = () => {
    console.log("Resending verification email...");
  };

  return (
    <div className=" bg-white flex items-center justify-center p-4 mx-4 rounded-2xl">
      <div className="p-8 max-w-md w-full flex flex-col">
        {/* Email Icon */}
        <div className="flex justify-center mb-6">
          {/* <div className="w-24 h-24 bg-yellow-50 rounded-full flex items-center justify-center border-2 border-yellow-100">
            <svg
              className="w-12 h-12 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div> */}

          <Image
            src="/images/check-your-inbox.png"
            alt="Email Icon"
            width={200}
            height={200}
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-charcoal mb-3">
          Check your inbox
        </h1>

        {/* Description */}
        <p className="text-charcoal text-sm mb-6">
          Click on the link we sent to{" "}
          <span className="font-bold text-charcoal">{email}</span> to finish
          your account set-up.
        </p>

        {/* Open Email Button */}
        <button
          onClick={handleOpenEmail}
          className="w-full cursor-pointer bg-white border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-full transition-colors flex items-center justify-center gap-2 mb-6"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Open Email
        </button>

        <p className="text-center text-sm text-gray-500">
          No email in your inbox or spam folder?
        </p>
        <button
          onClick={handleResend}
          className="text-charcoal font-medium underline text-xs cursor-pointer"
        >
          Let&apos;s resend it
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
