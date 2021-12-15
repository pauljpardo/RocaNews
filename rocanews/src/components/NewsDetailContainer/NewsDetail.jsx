import React, { useState, useEffect } from 'react'
import api from '../../services/apiconfig'
import { useParams } from 'react-router'
import CommentCreate from '../CommentCreate/CommentCreate'


export default function NewsDetailContainer() {
 
  const [story, setStory] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const getSpecificStory = async () => {
      const story = await api.get(`/stories/${id}`)
      // return resp.data
      setStory(story.data)
    }
    getSpecificStory();
 } , [])
  
  return (
    <>
      <p>{story?.title}</p>
      <div className='images'>
      <img src={story?.img_url1} alt='' />
      <img src={story?.img_url2} alt='' />
      <img src={story?.img_url3} alt='' />
      <img src={story?.img_url4} alt='' />
      <img src={story?.img_url5} alt='' />
      </div>
      <p>Comments</p>
      {story?.comments.map(comment => (
        <div className='comments'>
          <p><i>{comment.name} says</i></p>
          <p>{comment.text}</p>
        </div>
      ))}
      {/* Dont call title unless story is true */}
      <CommentCreate />
    </>
  )
}
