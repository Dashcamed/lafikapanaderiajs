import "./globals.css";
import Navbar from "../components/layouts/navbar/Navbar";
import Footer from "../components/layouts/footer/Footer";
import { Providers } from "./Providers";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "La fika panaderia",
  description:
    "Somos la fika panaderia ubicada en la Florida ofrecemos una gran variedad de productos como nunca antes los has probado. Ven a conocernos!",
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={montserrat.className}>
      <body>
        <main>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
