// AwardShowcase.jsx
import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import '../CSS/AwardShowcase.css';

const TrophySVG = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="rgb(0, 0, 116)" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H18V3C18 2.4 17.6 2 17 2H7C6.4 2 6 2.4 6 3V4H4C3.4 4 3 4.4 3 5V7C3 9.2 4.8 11 7 11C7 13.8 9.2 16 12 16C14.8 16 17 13.8 17 11C19.2 11 21 9.2 21 7V5C21 4.4 20.6 4 20 4ZM5 7V6H6V9C5.4 8.6 5 7.8 5 7ZM12 14C10.3 14 9 12.7 9 11V4H15V11C15 12.7 13.7 14 12 14ZM19 7C19 7.8 18.6 8.6 18 9V6H19V7ZM8 19H16V21H8V19Z"/>
  </svg>
);

const awards = [
  {
    title: 'Best Tech Influencer',
    description: 'Recognizing the top voice in tech.',
    category: 'Tech',
  },
  {
    title: 'Most Innovative Startup',
    description: 'Award for groundbreaking tech ideas.',
    category: 'Startup',
  },
  {
    title: 'Top Content Creator',
    description: 'Honoring engaging, impactful creators.',
    category: 'Entertainment',
  },
  {
    title: 'Best Developer Tool',
    description: 'Celebrating the tools that help devs thrive.',
    category: 'Tech',
  },
  {
    title: 'Breakout Startup of the Year',
    description: 'Recognizing early-stage momentum.',
    category: 'Startup',
  },
];

const AwardShowcase = () => {
  const [selectedAward, setSelectedAward] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const ref = useRef();

  const categories = ['All', 'Tech', 'Startup', 'Entertainment'];

  const filteredAwards =
    selectedCategory === 'All'
      ? awards
      : awards.filter((award) => award.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          confetti({ particleCount: 100, spread: 60, origin: { y: 0.6 } });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  const handleVoteClick = (awardTitle) => {
    setSelectedAward(awardTitle);
  };

  const closeModal = () => setSelectedAward(null);

  return (
    <section className="awards-section" id="awards" ref={ref}>
      <h2 className="awards-heading">🏅 Internet Award Highlights</h2>

      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="awards-container">
        {filteredAwards.map((award, index) => (
          <div className="award-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="award-icon"><TrophySVG /></div>
            <h3 className="award-title">{award.title}</h3>
            <p className="award-description">{award.description}</p>
            <button className="vote-btn" onClick={() => handleVoteClick(award.title)}>Vote Now</button>
          </div>
        ))}
      </div>

      {selectedAward && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Vote for {selectedAward}</h3>
            <form className="vote-form">
              <input type="text" placeholder="Your Full Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Enter Nominee code" required />
              <button type="submit" onClick={closeModal}>Submit Vote</button>
            </form>
            <button className="close-btn" onClick={closeModal}>✖</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AwardShowcase;
