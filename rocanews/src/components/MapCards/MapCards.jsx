import NewsCard from "../NewsCard/NewsCard";

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
    <div className='story-card'>
      <div className='cards'>
        {card}
      </div>
    </div>
  )
}
