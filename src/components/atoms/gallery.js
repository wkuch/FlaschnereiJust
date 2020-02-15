import React from 'react';
import c from 'classnames'
import ImageGallery from 'react-image-gallery';


const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export const Gallery = (props) => (
  <div
    style={props.style}
    className={c([
      props.className,
      'my-3'
    ])}>
    <ImageGallery
      lazyLoad={true}
      showThumbnails={false}
      items={images}
      showFullscreenButton={false}
      showPlayButton={false}
      autoPlay={true}
      slideDuration={1200}
      slideInterval={3500}
    />
  </div>
)
