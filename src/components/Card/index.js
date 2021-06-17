//index.js
import './index.css'

const Card = props => {
  const {cardList} = props
  const {title, description, imgUrl, className} = cardList
  return (
    <div className={className}>
      <div className="text-content">
        <h1 className="heading">{title}</h1>
        <p className="paragraph">{description}</p>
      </div>
      <div className="image-container">
        <img className="image" src={imgUrl} />
      </div>
    </div>
  )
}

export default Card
