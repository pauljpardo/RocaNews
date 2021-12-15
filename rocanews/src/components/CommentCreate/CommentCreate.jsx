import { useState } from "react";

export default function CommentCreate({ handleCommentCreate }) {
  const [formData, setFormData] = useState({
    name: "",
    text: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCommentCreate(formData);
        setFormData({
          name: "",
          text: "",
        });
      }}
    >
      <h4>Create Comment</h4>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Comment:
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </label>
      <button>Post</button>
    </form>
  );
}
