import React from 'react';
import './Image.css';

function Image({ imageUrl, description }) {
  return (
    <div className="content__image-container">
      <img className="content__image" src={imageUrl} alt="" />
      <div className="content__image-description">
        <p>{description ? description : 'No description'}</p>
      </div>
    </div>
  )
}

export default Image;