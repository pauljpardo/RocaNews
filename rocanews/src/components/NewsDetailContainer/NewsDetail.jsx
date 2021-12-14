import React, { useState, useEffect } from 'react'
import api from '../../services/apiconfig'


export default function NewsDetailContainer() {
 
  const [story, setStory] = useState([])
  
  useEffect(() => {
    const getSpecificStory = async () => {
      const story = await api.get('/stories/:story_id')
      // return resp.data
      setStory(story)
    }
    getSpecificStory();
 } , [])
  
  
  return (
    <>
      <p>{story.title}</p>
      <p>hi</p>
    </>
  )
}
