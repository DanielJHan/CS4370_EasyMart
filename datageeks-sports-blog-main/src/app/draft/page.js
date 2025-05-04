'use client'

import Header from '../components/Header';
import '../styles/ArticleGuide.css'
import '../styles/Wrapper.css'
import './Draft.css'

function App() {
  return (
    <div id='wrapper'>
      <Header></Header>
      <div className='full'>
        <h1>How Valuable is a First-Round Pick in the NFL Draft?</h1>
        <div id='collage'></div>
        <p>Okay, so I guess I'll start by clarifying what "valuable" actually means, and how 
          we plan to measure that.</p>
        <p>The definition of the "most valuable player", to me, is "the player who most 
          dramatically improves the quality of the team around them, by no other means than their own talent and 
          leadership." 
        </p>
      </div>
    </div>
  );
}

export default App;
