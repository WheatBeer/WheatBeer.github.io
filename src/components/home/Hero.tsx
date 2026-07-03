import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex h-72 items-center justify-center overflow-hidden md:h-96">
      <Image
        src="/images/stock_banner.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover blur-[1px]"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex flex-col items-center gap-4 text-center text-white">
        <h2 className="text-3xl font-bold tracking-wide md:text-4xl">SUNGMIN&rsquo;S BLOG</h2>
        <a
          href="#about-me"
          className="rounded-full border border-white/70 px-5 py-2 text-sm font-medium tracking-wide uppercase transition-colors hover:bg-white hover:text-slate-900"
        >
          About Me
        </a>
      </div>
    </div>
  );
}
