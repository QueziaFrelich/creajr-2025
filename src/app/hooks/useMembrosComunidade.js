"use client"

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
    /* enabled: !!comunidadeId && typeof comunidadeId === 'number', */
     enabled: !!localStorage.getItem('access_token'),
  })
}