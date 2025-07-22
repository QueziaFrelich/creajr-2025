"use client"

import axios from 'axios'

export const login = async () => {
  const username = process.env.LOGIN_USERNAME
  const password = process.env.LOGIN_PASSWORD
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

  const response = await axios.post(`${baseURL}/login`, {
    username,
    password,
  })

  const { access_token } = response.data
  if (typeof window !== "undefined") {
    localStorage.setItem("access_token", access_token);
  }
  return access_token
}