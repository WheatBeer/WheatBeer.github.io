import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-3 border-b border-slate-200 bg-white px-4 py-4 md:justify-start md:pl-8 dark:border-slate-800 dark:bg-slate-950">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logo.png"
          alt="WheatBeer logo"
          width={36}
          height={36}
          className="rounded"
        />
        <span className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-slate-900 dark:text-slate-100">WheatBeer</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Sungmin, Ryu</span>
        </span>
      </Link>
    </header>
  );
}
