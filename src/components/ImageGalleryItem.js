import { ImageModal } from './Modal.js'

export const ImageGalleryItem = ({ id, pageURL, previewURL, largeImageURL,
  tags, likes, views, previewWidth, previewHeight }) => (  
  <li style={{ display: "block" }} className="gallery-item" >
    <img className="ImageGalleryItem-image" src={previewURL} alt={id}
      width={previewWidth} height={previewHeight} />
        <a href={pageURL}>
        {/* {largeImageURL} */}
          {tags}
          Likes:{likes}
              Views:{views}
    </a>
    <ImageModal/>
      </li>
)



