import { ImageGalleryItem } from "./ImageGalleryItem.js";
import { ImageModal } from './Modal.js';
// import { Loader } from './Loader.js'
// import { getPictures } from './Api.js'

export const ImageGallery = ({ pictures }) => (  

    
    <>
        <h1 >Photo Gallery</h1>
        <ul className="gallery-item">
            {pictures.map(({ id, pageURL, previewURL, largeImageURL, tags, likes, views, previewWidth, previewHeight }) => (
                <ImageGalleryItem
                    key={id}
                    id={id}
                    pageURL={pageURL}
                    previewURL={previewURL}
                    largeImageURL={largeImageURL}
                    tags={tags }
                    likes={likes }
                    views={views}
                    previewWidth={previewWidth}
                    previewHeight={previewHeight}
                />
                   
    ))} <ImageModal/>
    </ul>
    </>
)




    //   <li key={id} style={{ display: "block" }} >
    //          <img className="ImageGalleryItem-image" src={previewURL} alt={id} width={previewWidth} height={previewHeight}/>
    //     <a href={pageURL}>
    //     {/* {largeImageURL} */}
    //       {tags}
    //       Likes:{likes}
    //           Views:{views}
    //     </a>
    //   </li>

   