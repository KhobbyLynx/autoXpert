import axios from 'axios'

const newRequest = axios.create({
  baseURL: 'https://autoxpert-server.onrender.com/api',
})

export default newRequest
