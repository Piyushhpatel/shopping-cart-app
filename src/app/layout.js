import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AppContextProvider } from "@/Context/AppContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profile Fyi Shop | Cart App",
  description: "This is an app made as a part of Profile Fyi Assignment",
  icons: '/shop.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AppContextProvider>
          <Toaster position="top-left" />
            <Navbar />
            {children}
          </AppContextProvider>
      </body>
    </html>
  );
}
