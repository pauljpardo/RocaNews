import { useState, Link } from "react"

export default function NewsCard({story}) {
  return (
    <div className='news-card'>
      <div className='news-card-img'>
        <Link to={`stories/:story_id}`}>
          <img src={story.img_url1} alt=''/>
        </Link>
      </div>
      <div className='news-card-title/description'>
        <p>{story.title}</p>
      </div>
    </div>
  )
}
