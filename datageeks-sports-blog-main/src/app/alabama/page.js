'use client'

import Header from '../components/Header';
import '../styles/ArticleGuide.css'
import './Alabama.css'

function App() {
  return (
    <div id='wrapper'>
      <Header></Header>
      <div className='full'>
        <h1>College Football Has a Georgia Problem... but Georgia Has an Alabama Problem</h1>
        <div id='main_image'></div>
        <p>(slow, deep breath inward)</p>
        <p>...</p>
        <p>*sighs*</p>
        <p>Damn you, Alabama.</p>
        <p>On Saturday, September 28th, 2024, the Georgia Bulldogs lost to the Alabama Crimson Tide by a score of 41-34. From the perspective of a neutral observer, 
          this game was electric: a high-scoring contest that saw Georgia mount a furious late comeback, in a game that went down to the final minutes. 
          Viewers got to witness the Tide's electric 17-year old wide receiver Ryan Williams, whose dynamic talent dazzled the country after recording 177 yards on just 6 receptions, 
          including the game-winning score. And, Jalen Milroe displayed incredible rushing talent, leading his team in rushing yards while also adding two touchdowns.</p>
          <p>From the perspective of a Georgia fan, this game was torturous, and, unfortunately, predictable.</p>
          <p>In my time here at UGA, this is the fourth matchup between us and Alabama, and our record in those games is now 1-3. Across Kirby Smart's coaching tenure he 
            is now a horrid 1-6 (.143) against Alabama head-to-head. Of the three losses since 2021, two occurred in the playoffs, with last year's SEC title defeat 
            denying us a shot at a three-peat. And now, we now have our first regular-season loss since our annual Florida matchup from <h4 id='special'>November 7th, 2020</h4>. 
          </p>
          <p>Let me show you something.</p>
          <div id='win_chart'></div>
          <p>That's right: ALL Georgia losses since 2021 are the sole responsibility of Alabama. Against 25 teams not named the Alabama Crimson Tide, we're a perfect 44-0. 
            But that all falls apart against crimson and white jerseys. And if we roll back the chart to the start of Kirby's tenure, we can see something even more depressing.
          </p>
      </div>
    </div>
  );
}

export default App;
