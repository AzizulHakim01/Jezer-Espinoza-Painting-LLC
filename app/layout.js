import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jezer Espinoza Painting LLC",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Header/>
          <Offer/>
          {/* <Navbar/> */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
