import axios from 'axios'

export const login = async (username, password) => {
  const response = await axios.post('https://backhml.linquei.com/v1/auth/login', {
    username: 'adminexterno@gmail.com',
    password: 'a12345678.',
  })

  const { access_token } = response.data

  // Armazena o token no localStorage para ser reutilizado
  localStorage.setItem('access_token', access_token)

  return access_token
}