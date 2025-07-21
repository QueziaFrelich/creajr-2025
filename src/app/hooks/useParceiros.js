"use client"
import { useQuery } from '@tanstack/react-query'
import api from '../services/api'

const fetchParceiros = async (comunidadeId, empresaId, categoriaParceiroId) => {
  const params = new URLSearchParams()
  if (empresaId) params.append('empresaId', String(empresaId))
  if (comunidadeId) params.append('comunidadeId', String(comunidadeId))
  if (categoriaParceiroId) params.append('categoriaParceiroId', String(categoriaParceiroId))

  const { data } = await api.get(`/parceiro/filter/externo?${params.toString()}`)
  return data
}

export const useParceiros = (empresaId, comunidadeId, categoriaParceiroId) => {
  return useQuery({
    queryKey: ['parceiros', empresaId, comunidadeId, categoriaParceiroId],
    queryFn: () => fetchParceiros(empresaId, comunidadeId, categoriaParceiroId),
    enabled: !!localStorage.getItem('access_token'),
  })
}