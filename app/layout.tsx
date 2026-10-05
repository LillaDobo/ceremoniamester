import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricsi • Ceremóniamester | A ti napotok, a ti történetetek",
  description: "Személyes, felszabadult esküvő, átgondolt szervezéssel. Ismerjétek meg Ricsit, és tervezzük meg együtt a nagy napot!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="hu"><body>{children}</body></html>;
}
