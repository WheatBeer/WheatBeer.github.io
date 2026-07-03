import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
        This page doesn&rsquo;t exist!
      </h1>
      <Link href="/" className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400">
        Back to home
      </Link>
    </div>
  );
}
