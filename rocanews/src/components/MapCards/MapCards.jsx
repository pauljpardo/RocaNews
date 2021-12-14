import NewsCard from "../NewsCard/NewsCard";

export default function MapCards({ stories }) {
  const card = stories?.map((story) => (
    <NewsCard
      key={story?.id}
      id={story?.id}
      img_url1={story?.img_url1}
      title={story?.title}
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
