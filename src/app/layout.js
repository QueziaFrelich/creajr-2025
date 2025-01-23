import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./ui/components/header/header";
import { Providers } from "./providers";
import Footer from "./ui/components/footer/footer";

export const metadata = {
  title: "Crea Jovem",
  description:
    "O objetivo do Crea Jovem é impulsionar e fortalecer jovens talentos, oferecendo capacitação contínua, acesso ao mercado de trabalho, estímulo à inovação, empreendedorismo e liderança.",
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
