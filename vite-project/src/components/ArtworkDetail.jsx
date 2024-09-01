import React from 'react';
import { useParams } from 'react-router-dom';
import './ArtworkDetail.css';

const ArtworkDetail = ({ artworks }) => {
  const { id } = useParams();
  const artwork = artworks.find((art) => art.id === parseInt(id));

  if (!artwork) return <div>Artwork not found</div>;

  return (
    <div className="artwork-detail">
      <img src={artwork.images.hero.large} alt={artwork.name} />
      <h1>{artwork.name}</h1>
      <p><strong>Artist:</strong> {artwork.artist.name}</p>
      <p><strong>Year:</strong> {artwork.year}</p>
      <p><strong>Description:</strong> {artwork.description}</p>
      <img src={artwork.artist.image} alt={artwork.artist.name} />
      <a href={artwork.source} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  );
};

export default ArtworkDetail;