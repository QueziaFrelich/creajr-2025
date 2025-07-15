"use client";

import Link from "next/link";
import Container from "../container/container";
import Icon_instagram from "../../icons/footer/Instagram";
import Icon_linkedin from "../../icons/footer/LinkedIn";
import Icon_youtube from "../../icons/footer/YouTube";
import Icon_facebook from "../../icons/footer/Facebook";
import Icon_twitter from "../../icons/footer/twitter";
import Icon_phone from "../../icons/footer/phone";
import Icon_email from "../../icons/footer/email";
import Icon_ubication from "../../icons/footer/ubication";
import Icon_person from "../../icons/footer/person";
import Text_body_base from "../text/text-body-base";
import Icon_link from "../../icons/footer/link";

export default function Footer() {
  return (
    <section className="bg-creajovem-blue-500 text-white py-16">
      <Container className="flex flex-col md:flex-row justify-between gap-12 text-sm">
        {/* Coluna 1: Logos + ícones sociais */}
        <div className="space-y-5 max-w-xs">
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 items-center">
  <img
    src="/brand/crea-sc-branco.png"
    alt="Logo CREA-SC"
    className="w-32 md:w-52"
  />
  <img
    src="/brand/creajr-branco.png"
    alt="Logo CREA Jr-SC"
    className="w-32 md:w-52"
  />
</div>
            <div className="flex gap-4 text-white">
              <Icon_instagram href="https://www.instagram.com/creascoficial/" />
              <Icon_linkedin href="https://www.linkedin.com/company/crea---sc" />
              <Icon_youtube href="https://www.youtube.com/@creasc" />
              <Icon_facebook href="https://www.facebook.com/creasc" />
              <Icon_twitter href="https://twitter.com/creasc" />
            </div>
          </div>
        </div>

        {/* Coluna 2: Contato */}
        <div className="space-y-5 text-white">
          <p className="font-bold text-lg">Contato</p>
          <div className="flex items-center gap-2">
            <Icon_person />
            <Text_body_base>
              Rodrigo Espíndola<br />
              <span className="text-sm">Assessor CREA Jr-SC e CREA Jovem</span>
            </Text_body_base>
          </div>
          <div className="flex items-center gap-2">
            <Icon_phone />
            <Text_body_base>(48) 3531-2141</Text_body_base>
          </div>
          <div className="flex items-center gap-2">
            <Icon_email />
            <Text_body_base>
              <Link href="mailto:creajrs.oficial@gmail.com" className="underline">
                creajrs.oficial@gmail.com
              </Link>
            </Text_body_base>
          </div>
          <div className="flex items-center gap-2">
            <Icon_email />
            <Text_body_base>
              <Link href="mailto:rodrigo@crea-sc.org.br" className="underline">
                rodrigo@crea-sc.org.br
              </Link>
            </Text_body_base>
          </div>
          <div className="flex items-center gap-2">
            <Icon_ubication />
            <Text_body_base>
              Rod. Admar Gonzaga, 2125 - Itacorubi, Florianópolis/SC
            </Text_body_base>
          </div>
          <div className="flex gap-3 pt-3">
            <Icon_instagram href="https://www.instagram.com/creascoficial/" />
            <Icon_linkedin href="https://www.linkedin.com/company/crea---sc" />
          </div>
        </div>

        {/* Coluna 3: Institucional */}
        <div className="space-y-5">
          <p className="font-bold text-lg">Institucional</p>
          <ul className="space-y-3">
            <li>
              <Link
                href="https://portal.crea-sc.org.br/"
                target="_blank"
                className="flex items-center gap-2 underline underline-offset-2"
              >
                O CREA-SC
                <Icon_link className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.confea.org.br/"
                target="_blank"
                className="flex items-center gap-2 underline underline-offset-2"
              >
                Confea
                <Icon_link className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                href="https://portal.crea-sc.org.br/entidades-de-classe/"
                target="_blank"
                className="flex items-center gap-2 underline underline-offset-2"
              >
                Entidades de classe
                <Icon_link className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                href="https://portal.crea-sc.org.br/regimento-interno/"
                target="_blank"
                className="flex items-center gap-2 underline underline-offset-2"
              >
                Regimento Interno
                <Icon_link className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
