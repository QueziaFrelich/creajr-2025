'use client'

import { useState, useEffect } from "react";
import Container from "../../components/container/container";
import Text_head_2 from "../../components/text/text-head-2";
import Text_body from "../../components/text/text-body-base"
import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { data_empresas_expositoras } from "../../../../../data/data-brands";
import Button_outline from "../../components/buttons/button_outline";

export default function Section_brands() {
    const [openBox, setOpenBox] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [filteredData, setFilteredData] = useState(data_empresas_expositoras);

    const handleOpenBox = (index) => {
      setOpenBox(openBox === index ? null : index);
    };

    useEffect(() => {
        const filtered = data_empresas_expositoras.filter((empresa) => {
            const matchesSearch = empresa.NomeDaEmpresa.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = filterCategory === 'Todos' || filterCategory === '' || empresa.Tag === filterCategory;
            return matchesSearch && matchesCategory;
        });
        setFilteredData(filtered);
    }, [searchTerm, filterCategory]);
    return (
        <section className="py-20 flex flex-col items-center justify-center" id="feiratecnologica">
            <Container className="flex flex-col gap-10 text-violet-crea-700">
                {/* Título */}
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
                            className="bg-transparent text-violet-crea-600 placeholder:text-violet-crea-600 w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-2 p-3 bg-violet-crea-400/10 border border-violet-crea-400 rounded-lg w-full md:w-min">
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="bg-transparent text-violet-crea-600 w-full md:w-52 focus:outline-none"
                        >
                            <option value="" disabled>Filtrar por</option>
                            <option value="Todos">Todos</option>
                            <option value="Agtech">Agtech</option>
                            <option value="CREA Jr-SC">Crea Jr-SC</option>
                            <option value="Construtech">Construtech</option>
                            <option value="Energia">Energia</option>
                            <option value="Ferramentas Digitais">Ferramentas Digitais</option>
                            <option value="Manufatura">Manufatura 4.0</option>
                            <option value="Security Tech">Security Tech</option>
                            <option value="Smart Cities">Smart Cities</option>
                            <option value="Sistema Profissional">Sistema Profissional</option>
                            <option value="Parceira">Parceira</option>
                            <option value="Aceleradas">Aceleradas</option>
                        </select>
                    </div>
                </div>

                {/* Grid de empresas */}
                <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 text-violet-crea-600">
                    {filteredData.map((empresa, index) => {
                        const isOpen = openBox === index;

                        return (
                            <div
                                key={index}
                                onClick={() => handleOpenBox(index)}
                                className={`group border-2 border-violet-crea-500 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer relative ${isOpen ? "col-span-2 xl:col-span-3 flex flex-col md:flex-row" : "col-span-1"
                                    }`}
                            >
                                {/* Imagem */}
                                <div className={`${isOpen ? "w-full md:w-1/2 p-4" : ""}`}>
                                    <img
                                        src={empresa.Image}
                                        alt={empresa.NomeDaEmpresa}
                                        className={`rounded-md w-full object-contain ${isOpen ? "max-h-64 hidden md:block" : "max-h-64"
                                            }`}
                                    />
                                </div>

                                {/* Botão flutuante */}
                                {!isOpen && (
                                    <button className="bg-violet-crea-400 text-white rounded-full absolute top-2 right-2 w-5 group-hover:w-20 h-5 text-xs transition-all overflow-hidden flex items-center justify-center px-1">
                                        <span className="block group-hover:hidden">+</span>
                                        <span className="hidden group-hover:block">Ver mais</span>
                                    </button>
                                )}

                                {/* Descrição Expandida */}
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
