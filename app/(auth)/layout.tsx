export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="w-full">{children}</div>
    </div>
  );
}
