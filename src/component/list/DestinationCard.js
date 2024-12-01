import React from 'react';

function DestinationCard({ title, description, image, url }) {
    const cardstyle = {
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" style={cardstyle} className="card">
            <img src={image} alt={title} className="card-image" />
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
    );
}

export default DestinationCard;