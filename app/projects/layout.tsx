import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "38Afolio",
  description: "My Projects",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 