import React, { useState, useEffect } from "react";
import api from "../../services/apiconfig";
import { useParams } from "react-router";
import CommentCreate from "../CommentCreate/CommentCreate";
import CommentEdit from "../CommentEdit/CommentEdit";
import { deleteComment, postComment, putComment } from "../../services/comments";
import { Link } from 'react-router-dom'
import './style.css'


export default function NewsDetailContainer() {
  const [story, setStory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getSpecificStory = async () => {
      const story = await api.get(`/stories/${id}`);
      // return resp.data
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
    setComments(prevState => prevState.map(comment => {
      return comment.id === commentId ? newComment : comment
    }))
    setIsEditing(false)
  };

  const handleCommentDelete = async (id) => {
    await deleteComment(id);
    setComments((prevState) =>
      prevState.filter((comment) => comment.id !== id)
    );
  };

  return (
    <>
      <span><Link to='/allnews'>Back to All News</Link></span>
      <p>{story?.title}</p>
      <div className="images">
        <img src={story?.img_url1} alt="" style={{ height: 800, width: 670 }} />
        <img src={story?.img_url2} alt="" style={{ height: 800, width: 670 }} />
        <img src={story?.img_url3} alt="" style={{ height: 800, width: 670 }} />
        <img src={story?.img_url4} alt="" style={{ height: 800, width: 670 }} />
        <img src={story?.img_url5} alt="" style={{ height: 800, width: 670 }} />
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
