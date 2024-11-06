// src/components/HackathonList.js
import React from 'react';
import { Link } from 'react-router-dom';

const HackathonList = ({ hackathons }) => {
  return (
    <div className="hackathon-list">
      {hackathons.map((hackathon) => (
        <div key={hackathon.id} className="hackathon-card">
          <h2>{hackathon.title}</h2>
          <Link to={`/hackathon/${hackathon.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default HackathonList;
