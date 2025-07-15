"use client";

import { useState, useMemo } from "react";
import Text_head_3 from "../../components/text/text-head-3";
import Icon_instagram from "../../icons/footer/Instagram";
import Icon_linkedin from "../../icons/footer/LinkedIn";
import { dataMentores } from "../../../../../data/data-mentores";
import Text_decoration_border from "../../components/text/decoration/text-decoration-border";
import Text_head_4 from "../../components/text/text-head-4";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DataNotFound from "../../components/data-states/data-not-found";

export default function SectionMentores() {
  const [openBox, setOpenBox] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenBox = (index) => {
    setOpenBox(openBox === index ? null : index);
  };

  const filteredMentores = useMemo(() => {
    return dataMentores.filter(
      (mentor) =>
        mentor.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section className={"space-y-5"}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <Text_decoration_border>
          <Text_head_4 className={"font-extrabold"}>Mentores</Text_head_4>
        </Text_decoration_border>

        <div className="flex items-center justify-between rounded-full py-1 px-3 bg-white/20 hover:bg-white/10 md:max-w-72">
          <input
            type="text"
            placeholder="Buscar"
            className="bg-transparent focus:outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <MagnifyingGlassIcon className="size-5" />
        </div>
      </div>

      {filteredMentores.length === 0 ? (
        <div className="min-h-96 w-full flex justify-center items-center text-center">
          <DataNotFound />
        </div>
      ) : (
        <div className={"grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5"}>
          {filteredMentores.map((palestrante, index) => (
            <div
              key={index}
              className={`${
                openBox === index
                  ? "col-span-2 xl:col-span-3 border-2  flex"
                  : "col-span-1 border-transparent max-w-96 mx-auto overflow-hidden"
              } border-2 rounded-lg transition-all duration-300 relative cursor-pointer group`}
              onClick={() => handleOpenBox(index)}
            >
              {/* Profile do palestrante */}
              <img
                src={palestrante.profile}
                alt={palestrante.fullName}
                className={`rounded-md max-h-64 ${
                  openBox === index && "hidden md:block"
                } `}
              />

              {/* Nome e titulo em profile */}
              <div
                className={
                  openBox === index
                    ? "hidden"
                    : "absolute bottom-0 p-5 h-full flex flex-col justify-end text-center bg-gradient-to-b from-40% from-creajr-blue-500/0 to-creajr-blue-500/80 w-full text-white"
                }
              >
                <div>
                  <Text_head_3 className={"font-extrabold"}>
                    {palestrante.fullName}
                  </Text_head_3>
                  <p className={"text-xs"}>{palestrante.position}</p>
                </div>
                <button className="bg-creajr-blue-500 text-white rounded-full absolute top-2 right-2 w-5 group-hover:w-20 h-5 text-xs transition-all">
                  <span className="block group-hover:hidden">+</span>
                  <span className="hidden group-hover:block">Ver mais</span>
                </button>
              </div>

              {/* Descrição do palestrante */}
              <div className={openBox === index ? "p-5" : "hidden"}>
                <div className="flex items-center gap-5">
                  <img
                    src={palestrante.profile}
                    alt={palestrante.fullName}
                    className={`rounded-md max-h-20 md:hidden`}
                  />
                  <div>
                    <Text_head_3
                      className={"font-bold text-creajovem-green-500"}
                    >
                      {palestrante.fullName}
                    </Text_head_3>
                    <p className={"text-sm"}>{palestrante.position}</p>
                  </div>
                </div>
                <p className="text-xs mt-2">{palestrante.description}</p>
                <div className="flex items-center justify-start gap-5 mt-2 text-creajovem-green-500">
                  {palestrante.instagram && (
                    <Icon_instagram
                      key={palestrante.instagram}
                      href={palestrante.instagram}
                    />
                  )}
                  {palestrante.linkedin && (
                    <Icon_linkedin
                      key={palestrante.linkedin}
                      href={palestrante.linkedin}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
