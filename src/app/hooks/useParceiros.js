"use client"
import { useQuery } from '@tanstack/react-query'
import api from '../services/api'

const fetchParceiros = async (empresaId, comunidadeId) => {
  const params = new URLSearchParams()
  if (empresaId) params.append('empresaId', String(empresaId))
  if (comunidadeId) params.append('comunidadeId', String(comunidadeId))

  const { data } = await api.get(`/parceiro/filter/externo?${params.toString()}`)
  return data
}

export const useParceiros = (empresaId, comunidadeId) => {
  return useQuery({
    queryKey: ['parceiros', empresaId, comunidadeId],
    queryFn: () => fetchParceiros(empresaId, comunidadeId),
    enabled: !!localStorage.getItem('access_token'),
  })
}