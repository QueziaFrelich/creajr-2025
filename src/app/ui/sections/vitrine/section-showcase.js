'use client'

import { useState, useEffect } from "react";
import Container from "../../components/container/container";
import Text_head_2 from "../../components/text/text-head-2";
import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Button_outline from "../../components/buttons/button_outline";
import { useMembrosComunidade } from "../../../hooks/useMembrosComunidade";

export default function Section_showcase() {
    const [openBox, setOpenBox] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    //Chamada da API
    const comunidadeId = 20;
    const funcaoPaiId = undefined;
    const { data, isLoading, error } = useMembrosComunidade(comunidadeId, funcaoPaiId);
    console.log("data recebida:", data);

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
                Image: membro.imagemPerfil || "/brand/placeholder.png",
                Site: membro.site || "",
                Bio: membro.sobre || "",
            }));
        });
    })

    const categoriasUnicas = Array.from(
        new Set(
            data?.map((item) => item.funcao.categoria).filter(Boolean)
        )
    );

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
                <div>
                    <Text_head_2 className="font-bold mb-5">Feira tecnológica</Text_head_2>
                </div>

                {/* Filtros */}
                <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
                    <div className="flex items-center gap-2 p-3 bg-violet-crea-400/10 border border-violet-crea-400 rounded-lg w-full md:w-96">
                        <MagnifyingGlassIcon className="size-5" />
                        <input
                            type="text"
                            placeholder="Buscar"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-transparent w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-2 p-3 bg-violet-crea-400/10 border border-violet-crea-400 rounded-lg w-full md:w-min">
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

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 ">
                    {filteredResults.map((empresa, index) => {
                        const isOpen = openBox === index;

                        return (
                            <div
                                key={index}
                                onClick={() => handleOpenBox(index)}
                                className={`group border-2 border-violet-crea-500 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer relative ${isOpen ? "col-span-2 xl:col-span-3 flex flex-col md:flex-row" : "col-span-1"
                                    }`}
                            >
                                <div className={`${isOpen ? "w-full md:w-1/2 p-4" : ""}`}>
                                    <img
                                        src={empresa.Image}
                                        alt={empresa.NomeDaEmpresa}
                                        onError={(e) => { e.target.src = "/placeholder.png" }}
                                        className={`rounded-md w-full object-contain ${isOpen ? "max-h-64 hidden md:block" : "max-h-64"}`}
                                    />
                                </div>

                                {!isOpen && (
                                    <button className="bg-violet-crea-400 rounded-full absolute top-2 right-2 w-5 group-hover:w-20 h-5 text-xs transition-all overflow-hidden flex items-center justify-center px-1">
                                        <span className="block group-hover:hidden">+</span>
                                        <span className="hidden group-hover:block">Ver mais</span>
                                    </button>
                                )}

                                {isOpen && (
                                    <div className="p-4 flex-1">
                                        <div className="md:hidden mb-2">
                                            <img
                                                src={empresa.Image}
                                                alt={empresa.NomeDaEmpresa}
                                                className="rounded-md max-h-20"
                                            />
                                        </div>
                                        {empresa.Bio && (
                                            <p className="text-xs mb-2">{empresa.Bio}</p>
                                        )}
                                        {empresa.Site && (
                                            <div className="mt-4 max-w-52">
                                                <Button_outline
                                                    href={empresa.Site}
                                                    text={"Acessar site"}
                                                    icon={<ArrowRightIcon className="size-5" />}
                                                    className="items-center justify-between rounded-full py-2 px-5 transition-all flex bg-violet-crea-400 hover:bg-violet-crea-700 text-white text-sm"
                                                    target={true}
                                                />
                                            </div>
                                        )}
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