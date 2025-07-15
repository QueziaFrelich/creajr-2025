import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./ui/components/header/header";
import { Providers } from "./providers";
import Footer from "./ui/components/footer/footer";

export const metadata = {
  title: "CreaJr",
  description:
    "O CREA Jr-SC promove a integração e o desenvolvimento de futuros profissionais das áreas de engenharia, agronomia e geociências, ...",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className="bg-white dark:bg-creajovem-blue-1000">
      <body className={`scroll-smooth ${montserrat.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
