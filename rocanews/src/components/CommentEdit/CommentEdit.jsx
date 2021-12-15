import { useState, useEffect } from "react";

export default function CommentEdit({id, handleCommentEdit, comment}) {
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

  useEffect(() => {
    setFormData({ name: comment.name , text: comment.text})
  }, [comment])
 

  return (
    <form
    onSubmit={(e) => {
      e.preventDefault();
        handleCommentEdit(formData, id)
        setFormData({
          name: '',
          text: ''
        })
    }}
    >
      <label>Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange} />
      </label>
      <label>Comment:
        <input
          type='text'
          name='text'
          value={formData.text}
          onChange={handleChange} />
      </label>
      <button >Post</button>
    </form>
  )
}


