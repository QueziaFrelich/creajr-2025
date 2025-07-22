"use client";

import { useState, useEffect } from "react";
import Container from "../../components/container/container";
import Text_head_3 from "../../components/text/text-head-3";
import Text_head_2 from "../../components/text/text-head-2";
import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Icon_instagram from "../../icons/footer/Instagram";
import Icon_linkedin from "../../icons/footer/LinkedIn";
import Icon_site from "../../icons/cards/icon-site";
import { useMembrosComunidade } from "../../../hooks/useMembrosComunidade";

export default function Section_showcase() {
    const [openBox, setOpenBox] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    //Chamada da API
    const comunidadeId = 23; //hml28
    const funcaoPaiId = 6;
    const { data, isLoading, error } = useMembrosComunidade(comunidadeId, funcaoPaiId);

    useEffect(() => {
        if (!data || !Array.isArray(data)) {
            console.warn("Dados inválidos");
            return;
        }

        const adaptado = data.flatMap((item) => {
            if (!item.membros || item.membros.length === 0) return [];

            return item.membros.map((membro) => ({
                NomeDaEmpresa: membro.nome || "Sem nome",
                Tag: item.funcao?.nome || "Sem função",
                Localizacao: membro.localizacao || "",
                Image: membro.imagemPerfil || "/brand/placeholder.png",
                Site: membro.site || "",
                Bio: membro.sobre || "",
            }));
        });

        setFilteredData(adaptado);
    }, [data]);

    const categoriasUnicas = Array.from(
        new Set(
            data?.map((item) => item.funcao?.nome).filter(Boolean)
        )
    );

    //índice de cores das tags
    const tagColors = [
        "bg-tag-100 text-tag-200",
        "bg-tag-200 text-tag-400",
        "bg-tag-300 text-tag-600",
    ];

    function getColorClassForTag(tag) {
        let hash = 0;
        for (let i = 0; i < tag.length; i++) {
            hash = tag.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % tagColors.length;
        return tagColors[index];
    }

    //Filtro de busca + categoria
    const filteredResults = filteredData.filter((empresa) => {
        const matchesSearch = empresa.NomeDaEmpresa.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'Todos' || filterCategory === '' || empresa.Tag === filterCategory;
        return matchesSearch && matchesCategory;
    });

    const handleOpenBox = (index) => {
        setOpenBox(openBox === index ? null : index);
    };

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar dados.</p>;

    return (
        <section className="py-20 flex flex-col items-center justify-center" id="feiratecnologica">
            <Container className="flex flex-col gap-10">
               
              <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 ">
                    <div className="h-6 bg-textDarkGreen rounded w-[5px]"></div>
                    <Text_head_2 className="font-bold  text-textDarkBlue flex items-center  h-full">Vitrine Acadêmica</Text_head_2>
                  </div>
                <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
                    <div className="flex items-center gap-2 p-3 bg-violet-crea-400/10 border border-violet-crea-400 rounded-3xl w-full md:w-1/2">
                        <MagnifyingGlassIcon className="size-5" />
                        <input
                            type="text"
                            placeholder="Buscar"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-transparent w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-2 p-3 bg-violet-crea-400/10 border border-violet-crea-400 rounded-3xl w-full md:w-min">
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="bg-transparent w-full md:w-52 focus:outline-none"
                        >
                            <option value="Todos">Todos</option>
                            {categoriasUnicas.map((cat, idx) => (
                                <option key={idx} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
             </div>
                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {filteredResults.map((empresa, index) => {
                        const isOpen = openBox === index;

                        return (
                            <div
                                key={index}
                                onClick={() => handleOpenBox(index)}
                                className={`group min-h-[300px] rounded-lg transition-all duration-300 relative cursor-pointer overflow-hidden ${isOpen
                                    ? "col-span-2 xl:col-span-3 border-2 border-violet-crea-600 flex"
                                    : "col-span-1 border border-gray-300 max-w-60 mx-auto"
                                    }`}
                            >
                                {/* Imagem fechada */}
                                <div className={`flex justify-center items-center ${isOpen ? "hidden md:flex" : "flex"}`}>
                                    <img
                                        src={empresa.Image}
                                        alt={empresa.NomeDaEmpresa}
                                        onError={(e) => {
                                            e.target.src = "/placeholder.png";
                                        }}
                                        className="rounded-md max-h-64 max-w-50 object-contain"
                                    />
                                </div>

                                {/* Overlay quando fechado */}
                                {!isOpen && (
                                    <div className="relative p-4 h-full flex flex-col justify-end">
                                        <button className="bg-violet-crea-400 rounded-full absolute top-12 right-2 w-5 group-hover:w-20 h-5 text-xs transition-all bg-creajr-blue-500/50 text-white">
                                            <span className="block group-hover:hidden">+</span>
                                            <span className="hidden group-hover:block">Ver mais</span>
                                        </button>
                                    </div>
                                )}


                                {/* Expandido */}
                                {isOpen && (
                                    <div className="p-5 flex-1 flex flex-col justify-between gap-3 w-full text-textDarkBlue">
                                        {/* Imagem no mobile */}
                                        <div className="flex items-center gap-5">
                                            <img
                                                src={empresa.Image}
                                                alt={empresa.NomeDaEmpresa}
                                                className="rounded-md max-h-20 md:hidden"
                                            />
                                            <div>
                                                <Text_head_3 className="font-bold">{empresa.NomeDaEmpresa}</Text_head_3>
                                                <p className={`mt-1 mb-2 text-xs font-medium px-2 py-1 rounded-full w-fit ${getColorClassForTag(empresa.Tag)} text-white`}>
                                                    {empresa.Tag}
                                                </p>
                                                {empresa.Localizacao && (
                                                    <p className="mt-1 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full w-fit">
                                                        {empresa.Localizacao}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Bio */}
                                        {empresa.Bio && (
                                            <p className="text-xs mt-2 leading-relaxed">{empresa.Bio}</p>
                                        )}

                                        {/* Ícones sociais */}
                                        <div className="flex items-center justify-start gap-5 mt-2 text-[#16B469]">
                                            {empresa.instagram && (
                                                <Icon_instagram key={empresa.instagram} href={empresa.instagram} />
                                            )}
                                            {empresa.linkedin && (
                                                <Icon_linkedin key={empresa.linkedin} href={empresa.linkedin} />
                                            )}
                                            {empresa.Site && (
                                                <Icon_site key={empresa.Site} href={empresa.Site} />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </Container>
        </section>
    );
}