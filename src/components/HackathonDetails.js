// src/components/HackathonDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './HackathonDetails.css'; // Add this CSS file for styling


import { Navigate } from 'react-router-dom';

const HackathonDetails = ({ hackathons }) => {
  const { id } = useParams();
  const hackathonId = parseInt(id, 10);

  if (isNaN(hackathonId)) {
    return <Navigate to="/" replace />;
  }

  const hackathon = hackathons.find((h) => h.id === hackathonId);

  if (!hackathon) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Hackathon Not Found</h2>
        <p>The hackathon you're looking for does not exist.</p>
        <Link to="/" style={{ color: '#667eea', textDecoration: 'none' }}>
          &larr; Back to Hackathons
        </Link>
      </div>
    );
  }

  return (
    <div className="hackathon-details">
      <header className="hackathon-header">
        <h1>{hackathon.title}</h1>
        <p className="event-dates">Event Dates: {hackathon.startDate} - {hackathon.endDate}</p>
      </header>

      <div className="hackathon-content">
        <aside className="sidebar">
          <div className="event-info">
            <h3>Event Information</h3>
            <p><strong>Prize:</strong> {hackathon.prizes}</p>
            <p><strong>Time left for registration:</strong> {hackathon.timeRemaining}</p>
          </div>
          <div className="team-info">
            <h3>Team Information</h3>
            <p><strong>Team size allowed:</strong> {hackathon.teamSize}</p>
          </div>
        </aside>

        <main className="details-main">
          <section className="hackathon-description">
            <h3>What is {hackathon.title}?</h3>
            <p>{hackathon.description}</p>
          </section>

          <section className="additional-info">
            <h3>Why choose this Hackathon?</h3>
            <p>{hackathon.benefits}</p>
            <p>{hackathon.theme}</p>
          </section>
          
          <div className="register-btn">
            <Link to="/login" className="login-register">Log-in to register</Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HackathonDetails;
