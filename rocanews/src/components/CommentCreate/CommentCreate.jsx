import { useState } from 'react'

export default function CommentCreate() {
  const [formData, setFormData] = useState({
    name: '',
    text: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // const handleCommentCreate = async (formData) => {
  //   const newComment = await postComment(formData);
  //   setComments(prevState => [...prevState, newComment]);
  //   history.push('/comments');
  // }

  return (
    <form>
      <h4>Create Comment</h4>
      <label>Name:
        <input
          type='text'
          name='name'
          value=''
          onChange={handleChange} />
      </label>
      <label>Comment:
        <input
          type='text'
          name='comment'
          value=''
          onChange={handleChange} />
      </label>
      <button>Post</button>
    </form>
  )
}
