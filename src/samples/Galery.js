import React from 'react';
import preload from '../components/image-preload';
import { generateImages } from './utils';
import './Galery.css';

function Image(props) {
  return (
    <div className='image-container'>
      <img  className='image-content' src={props.src} alt='pre-load' />
    </div>
  )
}

function Galery(props) {
  return (
    <div style={props.style}>
      <h1>Preload galery</h1>
      <div className='galery'>
        {
          props.imageArray.map((imageUrl, index) => (
            <Image key={index} src={imageUrl} height={250} width={250}/>
          ))
        }
      </div>
    </div>
  )
}

const PreloadGalery = preload(Galery);

PreloadGalery.defaultProps = {
  imageArray: generateImages()
}

export default PreloadGalery;