import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How I Work | Santiago DevRel",
  description:
    "How Santiago Trujillo thinks, approaches DevRel, and covers the developer journey from discovery to scale.",
};

export default function HowIWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
