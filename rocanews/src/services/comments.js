import api from './apiconfig'

export const getAllComments = async () => {
  const resp = await api.get('/comments/:story_id')
  return resp.data
}