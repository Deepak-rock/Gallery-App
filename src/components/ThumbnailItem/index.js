// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, setActiveImageId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails

  const onClickThumbnail = () => {
    setActiveImageId(id)
  }

  const activeThumbnailClassName = isActive ? 'active' : 'image-btn'

  return (
    <li className="thumbnail-item">
      <button className="btn" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeThumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
