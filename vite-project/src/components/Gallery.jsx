import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = ({ artworks }) => {
  return (
    <div className="gallery">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="artwork">
          <Link to={`/artworks/${artwork.id}`}>
            <img src={artwork.images.thumbnail} alt={artwork.name} />
            <h3>{artwork.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;