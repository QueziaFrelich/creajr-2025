'use client'

import { useState, useEffect } from "react";
import Container from "../../components/container/container";
import Text_head_2 from "../../components/text/text-head-2";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useParceiros } from "../../../hooks/useParceiros";
import { useSearchParams } from "next/navigation";
import { useCategorias } from "@/app/hooks/useCategorias";



export default function Section_showcase() {
    
    const [openCard, setOpenCard] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const comunidadeId = 20;
    const empresaId = undefined;
    const { data, isLoading, error } = useParceiros(comunidadeId, empresaId, filterCategory);
    const { data: categoriasData } = useCategorias();

    const searchParams = useSearchParams();
    const categoriaQuery = searchParams.get("c");
    useEffect(() => {
    if (categoriaQuery) {
        setFilterCategory(categoriaQuery);
    }
}, [categoriaQuery]);



//talvez essa parte do codigo ja nao tenha mais utilidade, verificar isso. Da linha 33 a 68
//
    useEffect(() => {
        if (!data || !Array.isArray(data)) {
            console.warn("Dados inválidos");
            return;
        }

        const adaptado = data?.map((item) => ({
            titulo: item.titulo || "Sem título",
            descricao: item.descricao || "",
            categoria: item.categoria?.descricao || "Sem categoria",
            urlLogo: item.urlLogo || "/placeholder.png",
            descricaoBeneficio: item.descricaoBeneficio || "",
            link: item.link || "",
        }));

        setFilteredData(adaptado);
    }, [data]);

    const filteredResults = filteredData.filter((beneficio) => {
        const matchesSearch = beneficio.titulo.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            filterCategory === 'Todos' ||
            filterCategory === '' ||
            beneficio.categoria === filterCategory;

        return matchesSearch && matchesCategory;
    });

    const categoriasUnicas = Array.from(
        new Set(
            data?.map((item) => item.funcao?.nome).filter(Boolean)
        )
    );
    //

    const handleToggleCard = (index) => {
        setOpenCard(openCard === index ? null : index);
    };

    if (isLoading) return <p className="text-center mt-5 mb-5">Carregando...</p>;
    if (error) return <p>Erro ao carregar dados.</p>;


    return (
        <section className="py-20 flex flex-col items-center justify-center" id="feiratecnologica">
            <Container className="flex flex-col gap-10">
                <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 ">
                    <div className="h-6 bg-textDarkGreen rounded w-[5px]"></div>
                    <Text_head_2 className="font-bold  text-textDarkBlue flex items-center  h-full">Benefícios</Text_head_2>
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
                            {categoriasData?.map((cat) => (
                                <option key={cat.id} value={cat?.id}>
                                    {cat?.descricao}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                 </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {data?.map((beneficio, index) => {
                        const isOpen = openCard === index;
                        return (
                            <div
                                key={index}
                                onClick={() => handleToggleCard(index)}
                                className="bg-white border border-blue-300 rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-300 min-h-0"
                            >
                                
                                <div className="w-full h-40 overflow-hidden">
                                    <img
                                        src={beneficio.urlLogo}
                                        alt={beneficio.titulo}
                                        className="w-full h-full object-cover"
                                        onError={(e) => (e.target.src = "/placeholder.png")}
                                    />
                                </div>
                                {isOpen && (
                                    <div className="p-5 space-y-3">
                                        <h3 className="text-xl font-bold text-blue-900">{beneficio.titulo}</h3>

                                        {beneficio.categoria?.descricao && (
                                            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                                {beneficio.categoria.descricao}
                                            </span>
                                        )}

                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            {beneficio.descricaoBeneficio || beneficio.descricao}
                                        </p>
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