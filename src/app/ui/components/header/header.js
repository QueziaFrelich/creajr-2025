"use client";

import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
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
  { name: "Contato", href: "/#", blank: false, icon: false },
  { name: "Benefícios CREA-SC", href: "#", blank: true, icon: true },
  { name: "Capacitação", href: "/#", blank: true, icon: true },
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
  const [isSticky, setIsSticky] = useState(false);
  const pathName = usePathname();

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
          isSticky && "bg-creajovem-blue-1000/50 backdrop-blur-lg fixed"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <Link href="/" className="text-lg font-bold">
              <img src="/brand/logo.svg" alt="Logotipo Crea Jovem" />
            </Link>

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

            {/* Menu Items */}
            <div
              className={`flex flex-col xl:flex-row items-center justify-center xl:justify-end w-full gap-8 transition-all duration-300 ${
                isMenuOpen
                  ? `absolute p-5 z-50 top-20 left-0 w-full bg-creajovem-blue-1000`
                  : "hidden xl:flex"
              }`}
            >
              <div className="w-full flex justify-center items-center">
                <nav className="w-full md:max-w-max grid space-y-8 xl:space-y-0 xl:grid-flow-col transition-all duration-300 text-xl text-creajovem-blue-500 dark:text-white xl:text-base">
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
                className={`w-full xl:w-max items-center rounded-full py-3 md:py-2 px-5 transition-all md:flex bg-white/20 hover:bg-white/10 border-creajovem-green-500 text-lg md:text-base`}
                target={true}
              />
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
        <ModalContent className="bg-creajovem-blue-600">
          <ModalHeader className="flex flex-col gap-5 p-5">
            <Text_head_2 className={"text-creajovem-green-500 font-bold"}>
              Inscrição
            </Text_head_2>
            <Text_body_base className={"font-normal"}>
              Para solicitar a inscrição no Programa Jovem Engenheiro do Crea-SC
              é necessário ler e concordar com o Termo de Uso e Política de
              Privacidade do Programa
            </Text_body_base>
          </ModalHeader>
          <ModalBody className="p-5 space-y-5">
            <div className="flex flex-col md:flex-row justify-between">
              {StepsForInscription.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row w-full">
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
                      <ChevronRightIcon className="h-6 w-6 text-white rotate-90 md:rotate-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Button_outline
              href={"https://www.creasc.org.br/creajovem"}
              text={"Inscrever"}
              className={`w-full md:w-max items-center rounded-full py-3 md:py-3 px-10 transition-all text-creajovem-blue-600 hover:text-white md:flex bg-creajovem-green-500 hover:bg-white/10 border-creajovem-green-500 font-bold`}
              target={true}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
