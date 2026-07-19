import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
  showSub?: boolean;
}

export default function Logo({ className = "h-12", variant = "gold", showSub = true }: LogoProps) {
  const textClass = variant === "dark" ? "text-[#11100F]" : "text-white";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <span className="relative aspect-square h-full min-h-10 overflow-hidden rounded-md border border-[#C9972B]/60 bg-[#11100F]">
        <Image
          src="/images/logo.jpeg"
          alt="Logo Mr. Light Art Deco"
          fill
          sizes="64px"
          className="object-cover"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-sans text-sm font-extrabold uppercase tracking-wide md:text-lg ${textClass}`}>
          MR. LIGHT
        </span>
        {showSub && (
          <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.25em] text-[#C9972B] md:text-[11px]">
            ART DECO
          </span>
        )}
      </span>
    </div>
  );
}
