"use client";

import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Container from "../container/container";
import Button_outline from "../buttons/button_outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30); // ativa sticky a partir de 30px
    };

    const handleResize = () => {
      if (window.innerWidth > 760) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`w-full top-0 z-50 transition-all duration-300 ${isSticky
          ? "fixed bg-[#2387D8]/70 backdrop-blur-md shadow-md"
          : "bg-[#2387D8]"
        }`}
    >
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold">
            <img
              src="/brand/creajr-branco.png"
              alt="Logotipo Crea Jovem"
              className="max-w-40 md:max-w-52"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex gap-4 items-center">
            <Button_outline
              text="Para Instituições de Ensino"
              href="/instituicoes"
              className="rounded-full py-2 px-4 text-white border-white hover:bg-white hover:text-creajovem-blue-500 transition-all"
            />
            <Button_outline
              text="Quero Participar"
              href="#"
              className="rounded-full py-2 px-4 text-white border-white hover:bg-white hover:text-creajovem-blue-500 transition-all"
            />
            <Link
              href="https://www.creajr-sc.org.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-creajovem-blue-500 font-semibold rounded-full py-2 px-4 hover:opacity-90 transition-all"
            >
              Fazer login
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="flex flex-col gap-3 mt-3 xl:hidden">
            <Button_outline
              text="Para Instituições de Ensino"
              href="#"
              className="rounded-full py-2 px-4 text-white border-white hover:bg-white hover:text-creajovem-blue-500 transition-all"
            />
            <Button_outline
              text="Quero Participar"
              href="#"
              className="rounded-full py-2 px-4 text-white border-white hover:bg-white hover:text-creajovem-blue-500 transition-all"
            />
            <Link
              href="#"
              className="bg-white text-creajovem-blue-500 font-semibold rounded-full py-2 px-4 hover:opacity-90 transition-all text-center"
            >
              Fazer login
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
}
