import './style.css'
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import { getAllNews } from '../../services/news';

export default function AllNewsContainer() {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const newsList = await getAllNews();
      setNews(newsList);
    }
    fetchNews();
  }, [])
  return (
    <div>
      <h3>All News</h3>
      <div className='news-card'>
        <div className='news-text'>
          {news.map((story) => (
          <p>{story.title}</p>
          ))}
        </div>
        <div className='news-img'>
          {news.map((story) => (
            <img src={story.img_url1}/>
          ))}
        </div>
      </div>
    </div>
    
  )
}
