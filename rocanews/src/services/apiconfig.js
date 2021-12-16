import axios from 'axios'

const baseUrl = 'https://rocanews-api.herokuapp.com/'

const api = axios.create({
  baseURL: baseUrl
});

export default api;