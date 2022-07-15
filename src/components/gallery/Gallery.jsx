import { React, useEffect, useState } from 'react'
import Image from '../image/Image';
import './Gallery.css';
import { useParams } from 'react-router-dom';
import { fetchImages } from '../../controllers/fetcher';

function Gallery({ searchTermFound }) {
  const [images, setImages] = useState([]);
  const { searchterm } = useParams();

  useEffect(() => {
    if (searchTermFound) {
      fetchImages(searchTermFound, (_images) => {
        setImages(_images);
      });
    }
  }, [searchTermFound]);

  return (
    <div className="content__images">
      {images.length > 0 ? images
        .map((img) => (<Image key={img.url} imageUrl={img.url} description={img.description} />)) :
        <div className="content__no-image-text">{
          searchterm ? 'No results found! Please search something normal/meaningful!' : 'Please use the searchbar to search for something!'
        }</div>}
    </div>
  )
}

export default Gallery;