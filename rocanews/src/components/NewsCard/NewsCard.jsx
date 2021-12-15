import { Link } from "react-router-dom"
import './style.css'


export default function NewsCard({story}) {
  return (
    <div className='news-card'>
      <Link to={`stories/${story?.id}`}>
        <div className='news-card-img'>
          <img src={story?.img_url1} alt=''/>
      </div>
      <div className='news-card-title-description'>
        <p>{story?.title}</p>
      </div>
      </Link>
    </div>
  )
}
  