import { useState } from 'react'

export default function CommentCreate() {
  const [formData, setFormData] = useState({
    name: '',
    text: ''
  })
  const handleChange = (e) => {
    const { name, text, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      [text]: value,
    }))
  }
  return (
    <form>
      <h4>Create Comment</h4>
      <label>Name:
        <input type='text' name='name' value='' onChange={handleChange} />
      </label>
      <button>Post</button>
    </form>
  )
}
