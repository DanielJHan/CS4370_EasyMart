'use client'

import Header from '../components/Header';
import '../styles/ArticleGuide.css'
import '../styles/Wrapper.css'
import './Jaguars.css'

function App() {
  return (
    <div id='wrapper'>
      <Header></Header>
      <div className='full'>
      <h1>STUB: The Jaguars Play a LOT of Games in London</h1>
        <div id='lead_image' className='image'></div>
        <p> When it comes to a team that plays a lot of games in London, you may expect 
          a team with a long, successful franchise history to be slotted for the NFL's 
          marquee London games. After all, these games are meant to be expanding the the audience 
          of football beyond the confines of North America, and for that task, we should be 
          sending franchises with well-built rosters and high win percentages, right?
        </p>
        <p>Here's some franchises that I may consider scheduling for a London NFL game:</p>
        <ul>
          <li>Kansas City Chiefs - defending Super Bowl champions, 3-1 Super Bowl record in last 5 seasons</li>
          <li>Baltimore Ravens - 2x MVP Lamar Jackson on the roster, extremely fun to watch</li>
          <li>Buffalo Bills - .707 win percentage in last 5 seasons, 4 consecutive division titles entering this season</li>
        </ul>
        <div id='bar' className='image'></div>
        <p>Since 2007 and through 2024, the NFL has scheduled 39 regular-season games in London stadiums. The Jaguars have played in 13 of those games, or one-third.</p>
        <div id='pie' className='image'></div>
        <p>This is bizarre for a variety of reasons. </p>
      </div>
    </div>
  );
}

export default App;