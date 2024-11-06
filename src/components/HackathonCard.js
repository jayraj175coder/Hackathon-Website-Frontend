// src/components/HackathonCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const HackathonCard = ({ hackathon }) => {
  return (
    <div className="hackathon-card" style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
       <img src={hackathon.imageUrl} alt={hackathon.title} style={{ width: '100%', height: 'auto' }} />
      <h2>{hackathon.title}</h2>
      <p>{hackathon.description}</p>
      <p>{hackathon.date}</p>
     
      <Link to={`/hackathon/${hackathon.id}`}>View Details</Link>
    </div>
  );
};

export default HackathonCard;
