"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Music2,
  Ghost,
} from "lucide-react";

type FormState = {
  email: string;
  subject: string;
  message: string;
};

const MAX_MESSAGE = 250;

export default function CustomInquiry() {
  const [form, setForm] = useState<FormState>({
    email: "",
    subject: "",
    message: "",
  });

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;

      if (key === "message") {
        setForm((prev) => ({ ...prev, message: value.slice(0, MAX_MESSAGE) }));
        return;
      }

      setForm((prev) => ({ ...prev, [key]: value }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Placeholder for when your backend is ready:
    // await fetch("/api/b2b-inquiry", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    console.log("B2B Inquiry (placeholder):", form);
    alert("Submitted (placeholder). Connect this to your backend when ready.");
  };

  return (
    <section className="w-full bg-ivory">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left panel */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold tracking-tight text-charcoal">
              B2B/custom inquiry
            </h1>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-charcoal">
              We’re here to assist with inquiries, custom designs, or any
              questions about our collections.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm font-medium text-charcoal">
                  Call us for instant support
                </p>
                <div className="mt-2 flex items-center gap-2 text-sm text-charcoal">
                  <Phone className="h-4 w-4" />
                  <span>+234 80 9292 7288</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-charcoal">
                  Write us an Email
                </p>
                <div className="mt-2 flex items-center gap-2 text-sm text-charcoal">
                  <Mail className="h-4 w-4" />
                  <span>saintvalor@gmail.com</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-charcoal">
                  Our social media
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-charcoal">
                  <Link
                    href="https://www.instagram.com/saint.valor_?igsh=eWQwcXVjb3Bpb3Fy&utm_source=qr"
                    className="about-social-media"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </Link>
                  <Link
                    href=" https://x.com/saintvalor_?s=21"
                    className="about-social-media"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4" /> Twitter
                  </Link>
                  <Link
                    href="#"
                    className="about-social-media"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" /> Facebook
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@saint.valor_?_r=1&_t=ZS-93UzpRUktaZ"
                    className="about-social-media"
                    aria-label="TikTok"
                  >
                    <Music2 className="h-4 w-4" /> TikTok
                  </Link>
                  <Link
                    href="#"
                    className="about-social-media"
                    aria-label="Snapchat"
                  >
                    <Ghost className="h-4 w-4" /> Snapchat
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel (Form) */}
          <div className="rounded-xl bg-transparent">
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-medium text-charcoal">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder="Enter your email address"
                  className="h-11 w-full rounded-md border border-[#E5DED3] bg-[#F8F5EE] px-3 text-sm text-charcoal placeholder:text-[#9A948A] outline-none focus:border-[#C9BBA6] focus:ring-2 focus:ring-[#D4AF37]/20"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-charcoal">
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={onChange("subject")}
                  placeholder="Enter title of message"
                  className="h-11 w-full rounded-md border border-[#E5DED3] bg-[#F8F5EE] px-3 text-sm text-charcoal placeholder:text-[#9A948A] outline-none focus:border-[#C9BBA6] focus:ring-2 focus:ring-[#D4AF37]/20"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-charcoal">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Write message here..."
                  rows={6}
                  className="w-full resize-none rounded-md border border-[#E5DED3] bg-[#F8F5EE] px-3 py-3 text-sm text-charcoal placeholder:text-[#9A948A] outline-none focus:border-[#C9BBA6] focus:ring-2 focus:ring-[#D4AF37]/20"
                />
                <div className="mt-2 flex justify-end text-xs text-[#8B847A]">
                  <span>
                    {Math.min(form.message.length, MAX_MESSAGE)}/{MAX_MESSAGE}
                  </span>
                </div>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-gold px-8 text-sm font-medium text-charcoal shadow-sm transition hover:brightness-95 active:scale-[0.99]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
