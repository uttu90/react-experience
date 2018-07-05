import React from 'react';
import preload from './preloadImage';
import './Galery.css';

function generateImages() {
  let imageArray = [];
  for (let i = 0; i < 100; i ++ ) {
    imageArray.push(`http://api.adorable.io/avatars/250/${i}`);
  }
  // Dummy image to test error
  //imageArray.push('http://dummy-image');
  return imageArray;
}

function Image(props) {
  return (
    <div className='image-container'>
      <img  className='image-content' src={props.src} alt='pre-load' />
    </div>
  )
}

function Galery(props) {
  return (
    <div className='galery'>
      {
        props.imageArray.map((imageUrl, index) => (
          <Image key={index} src={imageUrl} height={250} width={250}/>
        ))
      }
    </div>
  )
}

const PreloadGalery = preload(Galery);

PreloadGalery.defaultProps = {
  imageArray: generateImages()
}

export default PreloadGalery;