import NewsCard from "../NewsCard/NewsCard";
import './style.css'

export default function MapCards({ stories }) {
  console.log(stories)
  const card = stories?.map((story) => (
    <NewsCard
      key={story?.id}
      id={story?.id}
      story={story}
    />
  ))
  return (
    <>
      <div className='cards'>
        {card}
      </div>
    </>
  )
}
