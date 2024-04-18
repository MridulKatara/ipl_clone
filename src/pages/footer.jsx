import React, { useRef } from 'react';
import '../Css/footer.css';

const CricketMatches = () => {
  const match31 = {
    date: '7:30 PM IST',
    venue: 'Eden Gardens, Kolkata',
    teams: ['KKR', 'RR'],
  };

  const match32 = {
    date: '7:30 PM IST',
    venue: 'Narendra Modi Stadium, Ahmedabad',
    teams: ['GT', 'DC'],
  };

  const match33 = {
    date: '7:30 PM IST',
    venue: 'PCA New Stadium, Mullanpur',
    teams: ['PBKS', 'MI'],
  };

  const match34 = {
    date: '7:30 PM IST',
    venue: 'LSG CSK',
    teams: ['Match 7:30 PM'],
  };

  const matches = [match31, match32, match33, match34];

  const matchesRef = useRef(null);

  const scrollLeft = () => {
    if (matchesRef.current) {
      matchesRef.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (matchesRef.current) {
      matchesRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="matches-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="matches" ref={matchesRef}>
        {matches.map((match, index) => (
          <div key={index} className="match">
            <h2 className="match-title">Match {index + 1}</h2>
            <p className="match-date">Date: {match.date}</p>
            <p className="match-venue">Venue: {match.venue}</p>
            <p className="match-teams">Teams: {match.teams.join(' vs ')}</p>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default CricketMatches;
