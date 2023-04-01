import "@/styles/globals.css";
import { Inter as NextFont } from "next/font/google";

export const metadata = {
  title: "Home",
  description: "Comfy rosé pine styled startpage",
};

const font = NextFont({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
