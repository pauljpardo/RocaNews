import api from './apiconfig'

export const getAllNews = async () => {
  const resp = await api.get('/stories')
  return resp.data
}

export const getOneStory = async (id) => {
  try {
      const response = await api.get(`/stories/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}