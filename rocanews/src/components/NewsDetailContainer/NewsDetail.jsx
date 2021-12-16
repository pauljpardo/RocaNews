import React, { useState, useEffect } from "react";
import api from "../../services/apiconfig";
import { useParams } from "react-router";
import CommentCreate from "../CommentCreate/CommentCreate";
import CommentEdit from "../CommentEdit/CommentEdit";
import {
  deleteComment,
  postComment,
  putComment,
} from "../../services/comments";
import { Link } from "react-router-dom";
import "./style.css";
// import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from '@mui/material'

export default function NewsDetailContainer() {
  const [story, setStory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getSpecificStory = async () => {
      const story = await api.get(`/stories/${id}`);
      setStory(story.data);
      setComments(story.data.comments);
    };
    getSpecificStory();
  }, []);

  const handleCommentCreate = async (formData) => {
    const newComment = await postComment({ ...formData, story_id: id });
    setComments((prevState) => [...prevState, newComment]);
  };

  const handleCommentEdit = async (formData, commentId) => {
    const newComment = await putComment(formData, commentId);
    setComments((prevState) =>
      prevState.map((comment) => {
        return comment.id === commentId ? newComment : comment;
      })
    );
    setIsEditing(false);
  };

  const handleCommentDelete = async (id) => {
    await deleteComment(id);
    setComments((prevState) =>
      prevState.filter((comment) => comment.id !== id)
    );
  };

  // const images = [story?.img_url1, story?.img_url2, story?.img_url3, story?.img_url4, story?.img_url5]

  return (
    <>
      <Link to="/allnews" className='back-to'>Back to All News</Link>
      <p>{story?.title}</p>
      {/* <Carousel>
        {
          images.map((item, i) => <img src={item} key={i}  alt="News image" />)
        }
      </Carousel> */}
      <div className="images">
        <img src={story?.img_url1} alt="News image" />
        <img src={story?.img_url2} alt="News image" />
        <img src={story?.img_url3} alt="News image" />
        <img src={story?.img_url4} alt="News image" />
        <img src={story?.img_url5} alt="News image" />
      </div>
      <p>Comments</p>
      {comments.map((comment) => (
        <div className="comments">
          {isEditing === comment.id ? (
            <CommentEdit
              id={comment.id}
              comment={comment}
              handleCommentEdit={handleCommentEdit}
            />
          ) : (
            <div>
              <p>
                <i>{comment.name} says</i>
              </p>
              <p>{comment.text}</p>
              <button onClick={() => setIsEditing(comment.id)}>Edit</button>
              <button onClick={() => handleCommentDelete(comment.id)}>
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
      {/* Dont call title unless story is true */}
      <CommentCreate handleCommentCreate={handleCommentCreate} />
    </>
  );
}
