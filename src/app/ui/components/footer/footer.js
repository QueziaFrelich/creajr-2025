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
  return (
    <>
      {/* Section Contact */}
      <section
        className="flex flex-col justify-center mt-10 md:mt-5"
        id="contato"
      >
        <Container
          className={
            "flex flex-col md:flex-row justify-between gap-16 text-creajovem-blue-500 dark:text-white py-20 border-t border-creajovem-blue-500 dark:border-white "
          }
        >
          {/* Section 1 */}
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row md:items-center gap-5 w-72 md:w-full ">
              <Link
                href={"https://portal.crea-sc.org.br/ "}
                target="_blank"
                className="md:pr-5"
              >
                <img
                  src="/brand/crea_logo_white.png"
                  alt="Logo Crea"
                  className="w-full max-w-60 invert-0 dark:grayscale dark:invert"
                />
              </Link>
              <div className="flex md:hidden gap-5 items-center">
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
              <Link
                href={"/"}
                className="pt-5 md:pt-0 md:pl-5 border-t-2 md:border-t-0 md:border-l-2"
              >
                <img
                  src="/brand/creajovem_logo.png"
                  alt="Logo Crea Jovem"
                  className="w-full max-w-60 invert-0 dark:grayscale dark:invert"
                />
              </Link>
            </div>

            <div className="hidden md:flex gap-5 items-center">
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
                className="flex items-center gap-2 font-light text-sm hover:text-creajovem-green-500"
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

              <div>
                <Link
                  href={"https://wa.me/5548991594791"}
                  className="hover:text-creajovem-green-500 transition-all flex items-center gap-2 font-light text-sm"
                >
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0885 11.3795L11.408 9.73031L11.3979 9.72562C11.2068 9.6439 10.9984 9.61111 10.7914 9.6302C10.5845 9.6493 10.3856 9.71969 10.2127 9.835C10.1923 9.84844 10.1728 9.86305 10.1541 9.87875L8.25255 11.4998C7.04786 10.9147 5.80411 9.68031 5.21895 8.49125L6.84239 6.56078C6.85802 6.54125 6.87286 6.52172 6.88692 6.50062C6.99976 6.3282 7.06821 6.13056 7.08621 5.92529C7.1042 5.72002 7.07117 5.51348 6.99005 5.32406V5.31469L5.33614 1.62797C5.22891 1.38052 5.04452 1.17438 4.8105 1.04034C4.57649 0.906297 4.3054 0.85153 4.0377 0.884217C2.97909 1.02352 2.00737 1.54341 1.30406 2.34679C0.600739 3.15017 0.213913 4.1821 0.215827 5.24984C0.215827 11.453 5.2627 16.4998 11.4658 16.4998C12.5336 16.5018 13.5655 16.1149 14.3689 15.4116C15.1723 14.7083 15.6922 13.7366 15.8315 12.678C15.8642 12.4104 15.8095 12.1393 15.6756 11.9053C15.5418 11.6713 15.3358 11.4869 15.0885 11.3795ZM11.4658 15.2498C8.81455 15.2469 6.27269 14.1924 4.39796 12.3177C2.52322 10.443 1.46872 7.90112 1.46583 5.24984C1.46289 4.48694 1.73774 3.74906 2.23906 3.17399C2.74038 2.59892 3.43388 2.22599 4.19005 2.12484C4.18974 2.12796 4.18974 2.1311 4.19005 2.13422L5.83067 5.80609L4.21583 7.7389C4.19944 7.75776 4.18455 7.77788 4.1713 7.79906C4.05373 7.97947 3.98476 8.18718 3.97107 8.40208C3.95739 8.61697 3.99944 8.83176 4.09317 9.02562C4.80098 10.4733 6.25958 11.9209 7.72286 12.628C7.91814 12.7208 8.13418 12.7614 8.34985 12.7458C8.56552 12.7302 8.77345 12.6589 8.95333 12.5389C8.97339 12.5254 8.99269 12.5108 9.01114 12.4952L10.9104 10.8748L14.5822 12.5194C14.5822 12.5194 14.5885 12.5194 14.5908 12.5194C14.4909 13.2766 14.1185 13.9715 13.5434 14.4741C12.9682 14.9766 12.2296 15.2524 11.4658 15.2498Z"
                      fill="currentColor"
                    />
                  </svg>
                  <Text_body_base>(48) 99159-4791</Text_body_base>
                </Link>
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
