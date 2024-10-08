import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Javier Cardoso",
  description: "Javier Cardoso personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="./icon.png"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="./apple-icon.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
