import api from './apiconfig'

export const getAllNews = async () => {
  const resp = await api.get('/news')
  return resp.data
}