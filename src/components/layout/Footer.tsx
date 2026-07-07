import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 border-t border-slate-200 px-4 py-6 text-sm text-slate-500 md:px-8 dark:border-slate-800 dark:text-slate-400">
      <p>&copy; WheatBeer. All rights reserved.</p>
      <SocialIcons />
    </footer>
  );
}
