"use client"
import api from './api'

export const fetchMembrosPorFuncao = async (
  comunidadeId,
  funcaoPaiId
) => {
  const params = new URLSearchParams()
  params.append('comunidadeId', String(comunidadeId))
  if (funcaoPaiId) {
    params.append('funcaoPaiId', String(funcaoPaiId))
  }

  const { data } = await api.get(`/comunidade/membros-funcoes/externo?${params.toString()}`)
  return data
}