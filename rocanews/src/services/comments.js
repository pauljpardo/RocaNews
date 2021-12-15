import api from './apiconfig'

export const getAllComments = async () => {
  const resp = await api.get('/comments/:story_id')
  return resp.data
}

export const postComment = async (foodData) => {
  const resp = await api.post('/foods', { food: foodData });
  return resp.data;
};

export const putFood = async (id, foodData) => {
  const resp = await api.put(`/foods/${id}`, { food: foodData });
  return resp.data;
};

export const deleteFood = async (id) => {
  await api.delete(`/foods/${id}`);
};

export const addFlavor = async (idData) => {
  const resp = await api.post('/foods/flavors', { food: idData });
  return resp.data;
};