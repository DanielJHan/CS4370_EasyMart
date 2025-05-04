'use client'

import Header from '../components/Header';
import '../styles/ArticleGuide.css'
import '../styles/Wrapper.css'
import './2024_Recap.css'

function App() {
  return (
    <div id='wrapper'>
      <Header></Header>
      <div className='full'>
        <h1>Interesting Facts and Trivia from The 2024 NFL Season</h1>
        <div id='lead-image' className='image-in-article'></div>
        <i>Image courtesy of [source]</i>
        
        <p>With the conclusion of the 2024 NFL season, and the conference championship games 
            approaching, I think it's a good time to recap the craziness and insanity of this NFL 
            season. There were many weird occurrences, historic stats, and funny games this year, 
            and this article will not have a strict structure - it will just feature an assortment of 
            stories I found most notable throughout the season.
        </p>
        <hr></hr>
        
        <h2>Two 15-Win Teams in the NFL This Year for First Time Ever</h2>
        <h2>... and <u>FOUR</u> 14-Win Teams</h2>
        <h2>Saquon Barkley and Derrick Henry Redefine Greatness</h2>
        <h2>2024 Panthers Claim Single-Season Record for Most Defensive Points Allowed</h2>
        <h2>Joe Burrow is the New Age Drew Brees, Just Not in a Good Way</h2>
        <h2>Jared Goff Throws 5 Interceptions in a Game, Wins Anyway</h2>
        <h2>Scoring a Layup in Football</h2>
        <h2>We Need to Talk Tua - I Think He Now Deserves More Credit</h2>
        <h2>Ravens Ruled the Run This Season, but the Bills Dominated Turnovers</h2>
        <h2>From RG3 to Jayden Daniels - Washington's Franchise QB is the New Gold Standard</h2>
        <h2>Speaking of Daniels, His Hail Mary Is Probably Rarer than You Think</h2>
        <table className='outer-table'>
            <tbody className='outer-tbody'>
                <tr className='outer-tr'>
                    <td className='outer-td'>
                        <table className='inner-table'>
                            <tbody className='inner-tbody'>
                                <tr className='inner-tr'>
                                    <td className='inner-td'>a</td>
                                    <td className='inner-td'>b</td>
                                </tr>
                                <tr>
                                   <td className='inner-td'>c</td>
                                   <td className='inner-td'>d</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
