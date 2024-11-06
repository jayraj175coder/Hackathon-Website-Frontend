// src/App.js
import React from 'react';
import Header from './components/Header';
import HackathonCard from './components/HackathonCard';
import HackathonDetails from './components/HackathonDetails';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const hackathons = [
    {
      id: 1,
      title: 'Java Hackathon',
      description: 'An exciting hackathon focusing on Java programming challenges.',
      date: 'December 15, 2024',
      startDate: 'December 1, 2024',
      endDate: 'December 15, 2024',
      prizes: 'Top prize of $5000',
      timeRemaining: '10 days',
      teamSize: 'Up to 4 members',
      benefits: 'Networking opportunities, skill development, and prizes.',
      theme: 'Focuses on Java development and problem-solving.',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.6YIPJIcn64u3_FGAs5-8_gAAAA&pid=Api&P=0&h=180',
    },
    {
      id: 2,
      title: 'Machine Learning Hackathon',
      description: 'Compete with the best in machine learning projects and algorithms.',
      date: 'November 20, 2024',
      startDate: 'November 5, 2024',
      endDate: 'November 20, 2024',
      prizes: 'Top prize of $3000',
      timeRemaining: '5 days',
      teamSize: 'Up to 3 members',
      benefits: 'Showcase your ML skills, win prizes, and meet experts.',
      theme: 'AI, ML, and data science projects.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZZkzkxgA8yB58swwZTkHQt07dMqgLidYhA&s',
    },
  ];

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '30px 10px' }}>
                {hackathons.map((hackathon) => (
                  <HackathonCard key={hackathon.id} hackathon={hackathon} />
                ))}
              </main>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/hackathon/:id" element={<HackathonDetails hackathons={hackathons} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
