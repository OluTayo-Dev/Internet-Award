import React from 'react';
import '../CSS/Home.css';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AwardShowcase from "../components/AwardShowcase.jsx";

const Home = () => {
  return (
  <div>

    <Navbar />    
    <main className="dashboard">
       <AwardShowcase />
      <section id="categories" className="section">
        <h2>Award Categories</h2>
        <ul>
          <li>Best Tech Influencer</li>
          <li>Most Innovative Startup</li>
          <li>Top Content Creator</li>
        </ul>
      </section>

      <section id="nominees" className="section">
        <h2>Nominees</h2>
        <ul>
          <li>Nominee A</li>
          <li>Nominee B</li>
          <li>Nominee C</li>
        </ul>
      </section>

      <section id="vote" className="section">
        <h2>Vote Now</h2>
        <p>Voting opens on August 10. Stay tuned!</p>
      </section>
    </main>
     <Footer />
 </div>
  );
};

export default Home;
