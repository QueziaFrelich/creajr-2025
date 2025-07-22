import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMembrosPorFuncao } from "../services/comunidade";

export const useMembrosComunidade = (comunidadeId, funcaoPaiId) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setEnabled(true);
    }
  }, []);

  return useQuery({
    queryKey: ["membros-comunidade", comunidadeId, funcaoPaiId],
    queryFn: () => fetchMembrosPorFuncao(comunidadeId, funcaoPaiId),
    enabled,
  });
};
/* "use client"

import { useQuery } from '@tanstack/react-query'
import { fetchMembrosPorFuncao } from '../services/comunidade'


export const useMembrosComunidade = (
  comunidadeId,
  funcaoPaiId
) => {
  return useQuery({
    queryKey: ['membros-comunidade', comunidadeId, funcaoPaiId],
    queryFn: () => {
      if (!comunidadeId) throw new Error('comunidadeId é obrigatório')
      return fetchMembrosPorFuncao(comunidadeId, funcaoPaiId)
    },
    
     enabled: !!localStorage.getItem('access_token'),
  })
} */