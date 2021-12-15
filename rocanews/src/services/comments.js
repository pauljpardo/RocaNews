import api from './apiconfig'

export const getAllComments = async () => {
  const resp = await api.get('/comments/:story_id')
  return resp.data
}

export const postComment = async () => {
  const resp = await api.post(`/comments/:story_id`);
  return resp.data;
};

export const putFood = async (id, foodData) => {
  const resp = await api.put(`/foods/${id}`, { food: foodData });
  return resp.data;
};

export const deleteComment = async (id) => {
  await api.delete(`/comments/${id}`);
};
