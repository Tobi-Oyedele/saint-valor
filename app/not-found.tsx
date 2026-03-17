import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ivory flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left ornament */}
        <div className="absolute top-8 left-8 w-24 h-24 border border-border opacity-40" />
        <div className="absolute top-10 left-10 w-24 h-24 border border-border opacity-20" />

        {/* Bottom-right ornament */}
        <div className="absolute bottom-8 right-8 w-24 h-24 border border-border opacity-40" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-border opacity-20" />

        {/* Center faint circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full border border-border opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full border border-border opacity-[0.06]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Brand mark */}
        <p className="text-xs tracking-[0.4em] uppercase text-gold font-medium mb-10">
          Saint Valor
        </p>

        {/* 404 number */}
        <div className="relative mb-6">
          <span
            className="text-[10rem] leading-none font-thin select-none text-charcoal opacity-[0.07] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
            aria-hidden="true"
          >
            404
          </span>
          <h1 className="text-[5rem] leading-none font-light tracking-widest text-charcoal relative z-10">
            404
          </h1>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8 w-full">
          <div className="flex-1 h-px bg-border" />
          <span className="text-gold text-lg" aria-hidden="true">
            ✦
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-light tracking-widest uppercase text-charcoal mb-4">
          Page Not Found
        </h2>

        {/* Subtext */}
        <p className="text-secondary text-sm leading-relaxed tracking-wide mb-10">
          The page you are looking for may have been moved, renamed, or is no
          longer available. Let us guide you back to our collection.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <Link
            href="/"
            className="w-full sm:w-auto flex-1 bg-charcoal text-ivory text-xs tracking-[0.3em] uppercase px-8 py-4 hover:bg-gold hover:text-charcoal transition-colors duration-300 text-center"
          >
            Return Home
          </Link>
          <Link
            href="/shop"
            className="w-full sm:w-auto flex-1 border border-charcoal text-charcoal text-xs tracking-[0.3em] uppercase px-8 py-4 hover:border-gold hover:text-gold transition-colors duration-300 text-center"
          >
            View Collection
          </Link>
        </div>
      </div>
    </main>
  );
}
