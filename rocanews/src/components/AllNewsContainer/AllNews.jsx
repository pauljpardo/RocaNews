import './style.css'
import { useState, useEffect, Link } from 'react-router-dom'

export default function AllNewsContainer() {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      
    }
  }, [])
  return (
    <div>
      <h3>All News</h3>
    </div>
  )
}
