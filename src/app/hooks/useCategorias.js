"use client"
import { useQuery } from '@tanstack/react-query'
import api from '../services/api'

const fetchCategorias = async () => {
  const { data } = await api.get(`/categoria-parceiro/externo`)
  return data
}

export const useCategorias = () => {
  return useQuery({
    queryKey: ['categorias'],
    queryFn: () => fetchCategorias(),
    enabled: !!localStorage.getItem('access_token'),
  })
}