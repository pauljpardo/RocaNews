import api from './apiconfig'

export const getAllComments = async () => {
  const resp = await api.get('/comments/:story_id')
  return resp.data
}

export const postComment = async (formData) => {
  const resp = await api.post(`/comments`, {comment: formData});
  return resp.data;
};

export const putComment = async (formData, id ) => {
  const resp = await api.put(`/comments/${id}`, { comment: formData });
  return resp.data;
};

export const deleteComment = async (id) => {
  await api.delete(`/comments/${id}`)
  alert('Comment Deleted')
};
