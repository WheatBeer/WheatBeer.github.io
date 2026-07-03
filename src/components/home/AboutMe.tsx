import Image from "next/image";
import { resumeTagline } from "@/content/resume";

export default function AboutMe() {
  return (
    <div id="about-me" className="flex flex-col items-center gap-4 px-4 py-12 text-center">
      <Image
        src="/images/profile.jpg"
        alt="Sungmin Ryu"
        width={150}
        height={150}
        className="rounded-full object-cover"
      />
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          SUNGMIN RYU (류 성 민)
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{resumeTagline}</p>
      </div>
    </div>
  );
}
