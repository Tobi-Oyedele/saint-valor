export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-ivory">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
