import './style.css'
import { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { getAllNews } from '../../services/news';
import MapCards from '../MapCards/MapCards';

export default function AllNewsContainer({stories}) {
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
      <MapCards
        stories={stories}
        
      />
    </div>
  )
}
