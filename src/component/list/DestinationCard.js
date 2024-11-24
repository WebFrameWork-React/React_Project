import React from 'react';

function DestinationCard({ title, description, image, url }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="card">
            <img src={image} alt={title} className="card-image" />
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
    );
}

export default DestinationCard;