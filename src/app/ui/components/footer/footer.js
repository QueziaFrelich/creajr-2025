"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../container/container";
import Icon_instagram from "../../icons/footer/Instagram";
import Icon_linkedin from "../../icons/footer/LinkedIn";
import Icon_youtube from "../../icons/footer/YouTube";
import Icon_phone from "../../icons/footer/phone";
import Icon_email from "../../icons/footer/email";
import Icon_facebook from "../../icons/footer/Facebook";
import Icon_twitter from "../../icons/footer/twitter";
import Icon_ubication from "../../icons/footer/ubication";
import Icon_person from "../../icons/footer/person";
import Text_body_base from "../text/text-body-base";

export default function Footer() {
  const pathName = usePathname();
  return (
    <>
      {/* Section Contact */}
      <section className="py-20 md:py-20 min-h-96 flex flex-col justify-center bg-radial-gradient">
        <Container
          className={
            "flex flex-col md:flex-row justify-between gap-16 text-white border-t py-20"
          }
        >
          {/* Section 1 */}
          <div className="space-y-5">
            <div className="flex items-center gap-5">
              <Link href={"/"} target="_blank" className="pr-5">
                <img
                  src="/brand/crea_logo_white.png"
                  alt="Logo Crea"
                  className="w-full max-w-60"
                />
              </Link>
              <Link href={"/"} className="pl-5 border-l-2">
                <img
                  src="/brand/creajovem_logo.png"
                  alt="Logo Crea Jovem"
                  className="w-full max-w-60"
                />
              </Link>
            </div>

            <div className="flex gap-5 items-center">
              <Icon_instagram
                href={"https://www.instagram.com/creascoficial/"}
                setClass={"transition-all hover:text-creajovem-green-500"}
              />
              <Icon_linkedin
                href={
                  "https://www.linkedin.com/company/crea---sc/?originalSubdomain=br"
                }
                setClass={"transition-all hover:text-creajovem-green-500"}
              />
              <Icon_youtube
                href={"https://www.youtube.com/@creasc"}
                setClass={"transition-all hover:text-creajovem-green-500"}
              />
              <Icon_facebook
                href={"https://www.facebook.com/creasc"}
                setClass={"transition-all hover:text-creajovem-green-500"}
              />
              <Icon_twitter
                href={"https://twitter.com/creasc"}
                setClass={"transition-all hover:text-creajovem-green-500"}
              />
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <p className="font-bold mb-5 text-xl">Contato</p>
            <div className=" flex flex-col gap-4">
              <div className="flex items-center gap-2 font-light text-sm">
                <Icon_person />
                <Text_body_base>
                  Rodrigo Espíndola
                  <br></br>
                  <span className="text-sm">
                    Assessor CREA Jr-SC e CREA Jovem
                  </span>
                </Text_body_base>
              </div>

              <Link
                href={"https://br.linkedin.com/in/rodrigoesp%C3%ADndola"}
                target="_blank"
                className="flex items-center gap-2 font-light text-sm"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.129883 2.48539C0.129883 1.9818 0.306736 1.56635 0.660426 1.23904C1.01412 0.911705 1.47393 0.748047 2.03984 0.748047C2.59565 0.748047 3.04534 0.909182 3.38893 1.23148C3.74262 1.56384 3.91948 1.99691 3.91948 2.53071C3.91948 3.01415 3.74769 3.417 3.40409 3.7393C3.0504 4.07166 2.58554 4.23784 2.00952 4.23784H1.99436C1.43855 4.23784 0.988863 4.07166 0.645268 3.7393C0.301673 3.40694 0.129883 2.98896 0.129883 2.48539ZM0.326942 15.7043V5.61261H3.6921V15.7043H0.326942ZM5.55658 15.7043H8.92174V10.0693C8.92174 9.71676 8.96217 9.44483 9.04301 9.25348C9.18448 8.91104 9.39923 8.62148 9.68724 8.38481C9.97525 8.14812 10.3365 8.02978 10.7711 8.02978C11.9029 8.02978 12.4688 8.79018 12.4688 10.311V15.7043H15.834V9.9182C15.834 8.42761 15.4803 7.29708 14.7729 6.5266C14.0655 5.75613 13.1307 5.37089 11.9686 5.37089C10.665 5.37089 9.64935 5.92986 8.92174 7.04781V7.07802H8.90658L8.92174 7.04781V5.61261H5.55658C5.57679 5.93489 5.5869 6.93701 5.5869 8.61897C5.5869 10.3009 5.57679 12.6627 5.55658 15.7043Z"
                    fill="currentColor"
                  />
                </svg>
                <Text_body_base className={"underline underline-offset-2"}>
                  Rodrigo Espíndola
                </Text_body_base>
              </Link>

              <div className="flex items-center gap-2 font-light text-sm">
                <Icon_phone href={"#"} />
                <Text_body_base>(48) 99159-4791</Text_body_base>
              </div>
              <div className="flex items-center gap-2 font-light text-sm">
                <Icon_email href={"mailto:creasummit@crea-sc.org.br"} />
                <Text_body_base>creajovem@crea-sc.org.br</Text_body_base>
              </div>
              <div className="flex items-center gap-2 font-light text-sm">
                <Icon_ubication />
                <Text_body_base>Florianópolis - SC</Text_body_base>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
