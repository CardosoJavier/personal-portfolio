import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Javier Cardoso",
  description: "Javier Cardoso personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
