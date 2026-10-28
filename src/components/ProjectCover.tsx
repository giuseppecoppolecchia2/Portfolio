import Image from "next/image";
import { projects } from "@/content/projects";
import type { Locale } from "@/content/site";

export function ProjectCover({ theme, locale }: { theme: string; locale: Locale }) {
  const project = projects.find(project => project.theme === theme);
  if (!project?.image) return null;
  return <div className={`project-cover screenshot-cover cover-${theme}`}>
    <Image src={project.image.src} alt={project.image.alt[locale]} width={project.image.width} height={project.image.height} sizes="(max-width: 760px) 100vw, 70vw" />
  </div>;
}
