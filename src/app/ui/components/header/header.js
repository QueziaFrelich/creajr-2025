"use client";

import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Container from "../container/container";
import Button_outline from "../buttons/button_outline";
import { usePathname } from "next/navigation";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Text_body_base from "../text/text-body-base";
import Text_head_2 from "../text/text-head-2";

const navigation = [
  { name: "Home", href: "/", blank: false, icon: false },
  { name: "Contato", href: "/#contato", blank: false, icon: false },
  {
    name: "Benefícios CREA-SC",
    href: "https://inovacao.crea-sc.org.br/beneficios-crea-sc  ",
    blank: true,
    icon: true,
  },
  {
    name: "Capacitação",
    href: "https://unicrea.crea-sc.org.br/cursos",
    blank: true,
    icon: true,
  },
];

const StepsForInscription = [
  "Acesse o CreaNet",
  "Abrir a aba de protocolos",
  "Selecione novo protocolo",
  "Inscreva-se no Programa CREA Jovem - SC",
  "Confira e preencha todas as informações.",
];

export default function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathName = usePathname();

  // Cargar preferencia de tema
  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
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
    <>
      <header
        className={`w-full top-0 z-50 transition-all duration-300 ${
          isSticky &&
          "bg-white/60 dark:bg-creajovem-blue-1000/50 backdrop-blur-lg fixed"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <Link href="/" className="text-lg font-bold">
              {isDark ? (
                <img
                  src="/brand/creajovem_logo_dark.png"
                  alt="Logotipo Crea Jovem"
                  className="max-w-40 md:max-w-52"
                />
              ) : (
                <img
                  src="/brand/creajovem_logo_light.png"
                  alt="Logotipo Crea Jovem"
                  className="max-w-40 md:max-w-52"
                />
              )}
            </Link>

            <div className="flex xl:hidden items-center gap-5">
              {/* Menu Toggle for Mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden p-2"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>

              {/* Swich dark */}
              <button
                onClick={handleThemeChange}
                className="block xl:hidden py-3 px-3 rounded bg-creajovem-blue-100/50 hover:bg-creajovem-blue-100/30 dark:bg-white/20  dark:hover:bg-white/10 hover:text-creajovem-green-500 transition-all"
              >
                {isDark ? (
                  <SunIcon className="size-5" />
                ) : (
                  <MoonIcon className="size-5" />
                )}
              </button>
            </div>

            {/* Menu Items */}
            <div
              className={`flex flex-col xl:flex-row items-center justify-center xl:justify-end w-full gap-8 transition-all duration-300 ${
                isMenuOpen
                  ? `absolute p-5 z-50 top-20 left-0 w-full bg-white dark:bg-creajovem-blue-1000 rounded-b-lg`
                  : "hidden xl:flex"
              }`}
            >
              <div className="w-full flex justify-center items-center">
                <nav className="w-full xl:max-w-max grid space-y-8 xl:space-y-0 xl:grid-flow-col transition-all duration-300 text-xl text-creajovem-blue-500 dark:text-white xl:text-base">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      onClick={() => setIsMenuOpen(false)}
                      href={item.href}
                      target={item.blank ? "_blank" : undefined}
                      className={`h-4 w-full col-span-1 flex items-center text-current p-3 ${
                        index === 0
                          ? "border-none"
                          : "border-l-1 border-creajovem-green-500"
                      } ${
                        pathName === item.href
                          ? "font-bold text-creajovem-green-500"
                          : "hover:text-creajovem-green-500 transition-all"
                      }`}
                    >
                      {item.name}
                      {item.icon && (
                        <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                      )}
                    </Link>
                  ))}
                </nav>
              </div>

              <Button_outline
                onClick={onOpen}
                text={"Inscrever"}
                className={`w-full xl:w-max items-center rounded-full py-3 xl:py-2 px-5 transition-all xl:flex hover:bg-creajovem-green-500 dark:bg-white/20 border-creajovem-green-500 text-lg xl:text-base text-creajovem-blue-500 dark:text-white dark:hover:text-creajovem-blue-1000`}
                target={true}
              />

              {/* Swich dark */}
              <button
                onClick={handleThemeChange}
                className="hidden xl:block py-3 px-3 rounded bg-creajovem-blue-100/50 hover:bg-creajovem-blue-100/30 dark:bg-white/20  dark:hover:bg-white/10 hover:text-creajovem-green-500 transition-all"
              >
                {isDark ? (
                  <SunIcon className="size-5" />
                ) : (
                  <MoonIcon className="size-5" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        radius="lg"
        backdrop="blur"
        scrollBehavior="outside"
        classNames={{
          closeButton:
            "bg-white hover:bg-creajovem-green-500 text-creajovem-blue-900 transition-all p-2 rounded-full",
        }}
      >
        <ModalContent className="bg-white dark:bg-creajovem-blue-600 text-creajovem-blue-500 dark:text-white">
          <ModalHeader className="flex flex-col gap-5 p-5">
            <Text_head_2 className={"text-creajovem-green-500 font-bold"}>
              Inscrição
            </Text_head_2>
            <Text_body_base className={"font-normal"}>
              Para solicitar a inscrição no Programa Jovem Engenheiro do Crea-SC
              é necessário ler e concordar com o{" "}
              <Link
                href={"https://portal.crea-sc.org.br/lgpd/"}
                className="underline underline-offset-2 text-creajovem-green-500 "
              >
                Termo de Uso e Política de Privacidade
              </Link>{" "}
              do Programa
            </Text_body_base>
          </ModalHeader>
          <ModalBody className="p-5 space-y-5">
            <div className="flex flex-col xl:flex-row justify-between">
              {StepsForInscription.map((step, index) => (
                <div key={index} className="flex flex-col xl:flex-row w-full">
                  <div
                    className={`flex flex-col gap-2 p-2 border bg-white/10 rounded-lg`}
                  >
                    <Text_head_2
                      className={"font-extrabold text-creajovem-green-500"}
                    >
                      {index + 1}
                    </Text_head_2>
                    <Text_body_base className={"font-normal"}>
                      {step}
                    </Text_body_base>
                  </div>

                  {index !== StepsForInscription.length - 1 && (
                    <div className="flex items-center justify-center p-2">
                      <ChevronRightIcon className="h-5 w-5 text-current rotate-90 xl:rotate-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Button_outline
              href={"https://creanet.crea-sc.org.br/login"}
              text={"Inscrever"}
              className={`w-full xl:w-max items-center rounded-full py-3 xl:py-3 px-10 transition-all text-creajovem-blue-600 dark:hover:text-white xl:flex bg-creajovem-green-500 hover:bg-white/10 border-creajovem-green-500 font-bold`}
              target={true}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
