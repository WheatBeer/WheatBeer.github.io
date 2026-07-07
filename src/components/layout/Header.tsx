import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  mobileOpen: boolean;
  onToggleMobile: () => void;
}

export default function Header({ mobileOpen, onToggleMobile }: HeaderProps) {
  return (
    <header className="relative flex shrink-0 items-center justify-center gap-3 border-b border-slate-200 bg-white px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-4 md:justify-start md:pl-8 dark:border-slate-800 dark:bg-slate-950">
      <button
        type="button"
        onClick={onToggleMobile}
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-md border border-slate-200 bg-white p-2 shadow-sm md:hidden dark:border-slate-700 dark:bg-slate-900"
        aria-label="Toggle navigation"
      >
        {mobileOpen ? (
          <span className="block text-lg leading-none text-slate-700 dark:text-slate-300">✕</span>
        ) : (
          <span className="flex flex-col gap-1">
            <span className="block h-0.5 w-5 bg-slate-700 dark:bg-slate-300" />
            <span className="block h-0.5 w-5 bg-slate-700 dark:bg-slate-300" />
            <span className="block h-0.5 w-5 bg-slate-700 dark:bg-slate-300" />
          </span>
        )}
      </button>

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
