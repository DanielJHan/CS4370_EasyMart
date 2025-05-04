'use client'

import Header from '../components/Header';
import '../styles/ArticleGuide.css'
import '../styles/Wrapper.css'

function App() {
  return (
    <div id='wrapper'>
        <Header></Header>
        <div className='full'>
            <h1>The 2024 Chicago White Sox Are Officially the Worst Team in Modern MLB History</h1>
            <p>Hello - this is a new type of experimental article on this site that I'll be adding 
              from now on. It's called a <em>stub</em>, and it's essentially an article 
              about a neat stat/factoid, but not something suitable or substantial enough for a 
              whole feature-length article. In other words, it's the 'Shorts' edition of YouTube 
              for written content. Now that I've explained that, let's dive into what the White 
              Sox have managed to accomplish this season.
            </p>
            <p>
              Yesterday on September 27th, the Chicago White Sox lost to the Detroit Tigers by a 
              score of 4-1. A pretty typical score for a baseball game, except this game had some 
              extra significance behind it.
            </p>
            <p>
              This season, the Chicago White Sox had a... trying year - in fact, they've been 
              struggling as a franchise for several years now. They've been in the ever-tedious 
              process of rebuilding a team with solid veterans despite not having a large 
              payroll. Almost all teams do this at some point or another - here's the typical 
              process.
            </p>
            <ol>
              <li>Team has many good players, wins a lot of games, enjoys success</li>
              <li>Eventually players retire, or are traded, or sign elsewhere after becoming 
                too expensive
              </li>
              <li>The roster experiences a drop in skill, experience, leadership, and consistency</li>
              <li>Team regresses from good to bad - revenue declines as ticket and merch sales 
                stagnate
              </li>
              <li>Eventually after several bad years, one of several things happens:</li>
              <ul>
                <li>New owner or manager is hired to turn the team around through new coaches, 
                  free agency signings, and trades
                </li>
                <li>Team acquires high draft picks as compensation for poor regular season play, 
                  and the team builds around those players</li>
                <li>Team does these two things but continues to be mediocre</li>
              </ul>
            </ol>
            <p>
              The White Sox are all too familiar with this. In 2021, the last season they made the 
              playoffs, they did so in a fairly straightforward, no-nonsense way. They built their 
              roster around an assortment of low-ceiling, high-floor pitchers that could keep the 
              opponent's score down, and give the middling offense a chance to win games.
            </p>
        </div>
    </div>
  );
}

export default App;