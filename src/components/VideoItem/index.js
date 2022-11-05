import {Link} from 'react-router-dom'
import './index.css'

const VideoItem = props => {
  const {each} = props
  const {
    id,
    publishedAt,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
  } = each
  return (
    <Link to={`/videos/${id}`} className="link-item">
      <li className="cardDiv">
        <img src={thumbnailUrl} className="img8" alt="video thumbnail" />
        <div className="cardDiv5">
          <div className="small-icon">
            <img src={profileImageUrl} className="img9" alt="channel logo" />
          </div>
          <div className="cardDiv3">
            <p className="p3">{title}</p>
            <p className="p3">{name}</p>
            <div className="cardDiv4">
              <p className="p4">{viewCount}</p>
              <p className="p4">. {publishedAt}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default VideoItem
