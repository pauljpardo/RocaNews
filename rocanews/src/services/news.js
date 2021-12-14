import api from './apiconfig'

export const getAllNews = async () => {
  const resp = await api.get('/stories')
  return resp.data
}