'use client'

import Header from '../components/Header';
import '../styles/ArticleGuide.css'
import '../styles/Wrapper.css'
import './Cavaliers.css'
import Link from 'next/link';

function App() {
  return (
    <div id='wrapper'>
      <Header></Header>
      <div className='full'>
        <h1>The 2024-2025 Cleveland Cavaliers started their season 15-0. Let's Predict Their Record.</h1>
        <div id='lead-image' className='image-in-article'></div>
        <i>Image courtesy of Joshua Gunter (Cleveland.com)</i>
        <p>The Cleveland Cavaliers just did something special. Like, <i>really</i> special.</p>
        <p>On November 17th, the Cleveland Cavaliers beat the Charlotte Hornets to improve their 
          record this season to 15-0. They're the 4th NBA team in history to start 15-0, and 
          probably would have pushed their streak even further had they not been scheduled to play 
          the defending champion Boston Celtics two nights later.
        </p>
        <p>And even that loss to the Celtics was a close one - a loss by just 3 points after 
          having fallen behind by 21 points in the 3rd quarter. It's very likely that the 
          Cavaliers would have won had they played any of the other 28 NBA teams, all of which 
          lack the depth and true star power of the mighty Celtics.
        </p>
        <p>On the day of writing this article, the Cavaliers are 16-1. They are at the top of 
          the NBA standings and seem poised to make a deep playoff run at the bare minimum. 
          So, my question is: what can we expect for these  Cavaliers? Using the data we have 
          at our disposal, can we guess if this team is bound to win the NBA title?
        </p>
        <h2>Data Point #1: The 2024-2025 Cavaliers have started their season 15-0.</h2>
        <p>Only three other NBA teams have done this. </p>
        <ul>
          <li>1948-1949 Washington Capitals (started 15-0)</li>
          <li>1993-1994 Houston Rockets (started 15-0)</li>
          <li>2015-2016 Golden State Warriors (started 24-0)</li>
        </ul>
        <p>And their seasons ended like this: </p>
        <ul>
          <li>1948-1949 Washington Capitals: Lost BAA Finals</li>
          <li>1993-1994 Houston Rockets: <b>Won NBA Finals</b></li>
          <li>2015-2016 Golden State Warriors: Lost NBA Finals</li>
        </ul>
        <p>...OK, so every team that has started 15-0 has at least <i>made</i> the Finals in 
        that given year. Cool.</p>
        <p>
          I was pretty surprised to see this. Although it's early in the year, we have at least one 
          piece of evidence that we are witnessing a title contender at this very moment.
        </p>
        <p>Looking at these teams' records at the conclusion of the season is a bit less impressive, 
          but still definitely worth noting:
        </p>
        <ul>
          <li>1948-1949 Washington Capitals: 38-22 (.633)</li>
          <li>1993-1994 Houston Rockets: 58-24 (.707)</li>
          <li>2015-2016 Golden State Warriors: 73-9 (.890)</li>
        </ul>
        <p>
          In the case of the Capitals and Rockets teams, both <i>significantly</i> cooled down 
          after their 15-0 starts. The Capitals closed out their season by going a very mediocre 
          23-22, and the Rockets went 43-24 in their remaining games - much better, 
          but still a far reach from maintaining pace. We can expect the 
          Cavaliers to also cool off their hot start, but by how much?
        </p>

          <h2>Data Point #2: The 2024-2025 Cavaliers have a net rating of 12.5, meaning that per 
            100 team possessions, the Cavaliers outscore their opponents by 12.5 points.
          </h2>
          <p><Link href='https://www.pivotanalysis.com/post/net-rating'><b>Net rating</b></Link></p>
          <p>You're probably wondering, "is that a lot?" Well, I had that same question too, so I 
            decided to run a Stathead query to find all NBA teams who completed a regular season 
            with a net rating of 12.0 or higher.
          </p>
          <p>
            I expected to not see many teams on this list. I did <b>not</b> expect there to be 
            exactly one entry.
          </p>
          <div className='image-in-article' id='bulls'></div>
          <p>The 1995-1996 Michael Jordan-led Bulls - the team widely regarded as the greatest NBA team 
            of all time. They were the first NBA team to ever win 70 or more games in a season, and only 
            the aforementioned 2015-2016 Warriors have acheived that since. The team led the league in 
            both offensive AND defensive rating, featured four future Hall of Famers with Michael 
            Jordan, Scottie Pippen, Dennis Rodman, and Toni Kukoč on the roster, and are one of the 
            most dominant sports teams ever assembled across all sports and eras.
          </p>
          <p>So after seeing this, I decided to expand the query to include all teams that have 
            finished a season with a net rating of even <i>10.0.</i> The resulting list of teams is... 
            jawdropping.
          </p>
          <table>
            <tr>
              <th>Team</th>
              <th>Net Rating</th>
              <th>Record</th>
              <th>Season Result?</th>
              <th>Why is This Team Special?</th>
            </tr>
            <tr>
              <td>1970-1971 Milwaukee Bucks</td>
              <td>10.8</td>
              <td>66-16</td>
              <td><b>Won Finals</b></td>
              <th>Led by Hall of Famers Oscar Robertson and Kareem Abdul-Jabbar in his first of 
                six MVP seasons. The team was two wins away from tying the then-NBA record for 
                single-season wins, they recorded an NBA-record 20 consecutive wins, and they 
                also set an NBA record for most double-digit wins in a season with 47.</th>
            </tr>
            <tr>
              <td>1971-1972 Milwaukee Bucks</td>
              <td>10.0</td>
              <td>63-19</td>
              <td><b>Lost Conf. Semifinals</b></td>
              <th>Led by Hall of Famers Oscar Robertson and Kareem Abdul-Jabbar in his second of 
                six MVP seasons, this team was still quite dominant but failed to match the historic 
                production of their previous year. However, Abdul-Jabbar did manage to set the 
                NBA single-season for Win Shares with 25.6. This team was quite strong, but failed 
                to contend in their matchup against an even greater team.</th>
            </tr>
            
          </table>
          
      </div>
    </div>
  );
}

export default App;
