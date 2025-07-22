"use client";

import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const fetchCategorias = async () => {
  const { data } = await api.get(`/categoria-parceiro/externo`);
  return data;
};

export const useCategorias = () => {
  const isClient = typeof window !== "undefined";
  const isEnabled = isClient && !!localStorage.getItem("access_token");

  return useQuery({
    queryKey: ["categorias"],
    queryFn: () => fetchCategorias(),
    enabled: isEnabled,
  });
};