import "./globals.css";
import Navbar from "../components/layouts/navbar/Navbar";
import Footer from "../components/layouts/footer/Footer";

export const metadata = {
  title: "La fika panaderia",
  description:
    "Somos la fika panaderia ubicada en la Florida ofrecemos una gran variedad de productos como nunca antes los has probado. Ven a conocernos!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
