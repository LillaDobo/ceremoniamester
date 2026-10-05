import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faur Richárd",
  description: "Személyes, felszabadult esküvő, átgondolt szervezéssel. Ismerjétek meg Faur Richárdot, és tervezzük meg együtt a nagy napot!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="hu"><body>{children}</body></html>;
}
