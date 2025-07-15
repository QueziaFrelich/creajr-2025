/* 

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
  } */
"use client"

import { NextUIProvider } from "@nextui-org/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { login } from "./services/auth"

export function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient())

 useEffect(() => {
    const doLogin = async () => {
      const token = localStorage.getItem("access_token")
      if (!token) {
        try {
          await login()
          console.log("Login automático feito com sucesso.")
        } catch (err) {
          console.error("Erro ao fazer login automático:", err)
        }
      }
    }
    doLogin()
  }, [])
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </NextUIProvider>
  )
}