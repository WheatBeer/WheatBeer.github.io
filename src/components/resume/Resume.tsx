import { resumeSections } from "@/content/resume";
import ResumeSectionBlock from "./ResumeSection";

export default function Resume() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {resumeSections.map((section) => (
        <ResumeSectionBlock key={section.id} section={section} />
      ))}
    </div>
  );
}
