
import "./globals.css";
import Header from "./components/Header";

import { Mulish } from 'next/font/google';
import Footer from "./components/Footer";

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})

export const metadata = {
  title: "Nextflix",
  description: "An Online Streaming Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body >
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
