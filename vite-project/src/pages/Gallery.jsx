import React from 'react';
import { useParams } from 'react-router-dom';
import { galleryData } from '../data';
import './Gallery.css';

const Gallery = () => {
  const { id } = useParams();
  const item = galleryData[id];

  return (
    <div className="gallery-details">
      <h1>{item.name} ({item.year})</h1>
      <img src={item.images.hero.large} alt={item.name} />
      <p>{item.description}</p>
      <p><a href={item.source} target="_blank" rel="noopener noreferrer">Learn more</a></p>
      <div className="artist">
        <img src={item.artist.image} alt={item.artist.name} />
        <p>{item.artist.name}</p>
      </div>
    </div>
  );
};

export default Gallery;