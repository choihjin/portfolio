import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Detail",
  description: "Project Detail Page",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 