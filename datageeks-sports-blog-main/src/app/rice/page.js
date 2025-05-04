'use client'

import Header from '../components/Header';
import '../styles/ArticleGuide.css'
import './Rice.css'
import '../styles/Wrapper.css'

function App() {
  return (
    <div id='wrapper'>
      <Header></Header>
      <div className='full'>
        <h1>The Unparalleled Career Dominance of Jerry Rice</h1>
        <div id='lead_image' class='image-in-article'></div>
        <i>Note: Statistics shown are correct as of the conclusion of Week 3 of the 2024 NFL 
          season.
        </i>
        <p>Welcome to DataGeeks Sports Blog! I've had the idea to make a sports blog for a while, 
          to showcase and highlight some of the more fascinating sports stories and facts out there. 
          Unfortunately at the time, I had no website creation skills, so I was forced to scrap 
          the project. However, I've kept a list of interesting topics that I want 
          to cover, and this is the first one on that list - the insanity of Jerry Rice's career.
        </p>
        <p>In sports, there are many arguments that fans and observers use to gauge who is the 
          greatest player of all time in a particular sport or category. Most arguments seem 
          to balance a player's peak performance, longevity, consistency, playoff performance, 
          team success, and the "intangibles." These are subjective criteria; there is no 
          "formula" to plug in a player's numbers and spit out an assessment of that player's 
          career. And in sports, two fans may have drastically different interpretations of what 
          makes a player the "greatest of all time." 
        </p>
          <p>However, in football, the wide receiver position does not have this problem; 
            simply put, Jerry Rice has it all. In an unprecedented 20-year career, Rice combined 
            league-leading performance with longevity and durability that would be 
            exceptional for a quarterback or kicker, let alone the brutally physical wide receiver 
            position. His career statistics tower over every other receiver's despite 
            playing in a much more defense-friendly era, and the degree to which he dominated his 
            position makes him arguably the greatest player in NFL history.
        </p>
        <h2>The Career Records</h2>
        <p>One of the many reasons why Jerry Rice is considered the most accomplished receiver 
          ever is the sheer volume of his production. He is the NFL's all-time  leader in many 
          of the most coveted career statistics, including:
        </p>
        <ol>
          <li>Receiving yards</li>
          <li>Receiving touchdowns</li>
          <li>Receptions</li>
          <li>Total touchdowns</li>
          <li>All-purpose yards</li>
        </ol>
        <p>Now, I recognize that just telling you about these statistics won't be so useful, 
          considering that without further context, it won't be clear how impressive these 
          accomplishments are. So, I will discuss each in detail to hopefully shed light on 
          why there will never be another Jerry Rice. Let's talk receiving yards first.
        </p>
        <h2>Receiving Yards</h2>
        <p>
          To show you how large Jerry Rice's lead stands in the department of receiving yardage, 
          the first graph I'll show you has him removed. Here, the top receiver is Larry 
          Fitzgerald, who is one of only two players in NFL history to reach 16,000 receiving 
          yards over their NFL career. Specifically, his total stands at 17,492 yards, or about 
          a 10% lead over Hall of Fame receiver Terrell Owens.
        </p>
        <div id='yards_bar1' className='image-in-article'></div>
        <p>Now, here's another chart made to include Rice. His career total in receiving yards?</p>
        <h2>22,895.</h2>
        <div id='yards_bar2' className='image-in-article'></div>
        <p>
          Fitzgerald is a future Hall of Fame receiver too, but he can't even get within 5,000 
          yards of Rice. To reach him, he would need to magically increase his receiving yardage 
          by a ludicrous 31%. The lead that Jerry Rice holds is so large that I'm quite 
          confident no other player will eclipse it, even as the passing game continues to evolve 
          in the coming years. To reach this echelon, a receiver would have to do one of several 
          impossible things:
        </p>
        <ol>
          <li>Play 20 seasons, averaging 1,100 yards per season, without injury</li>
          <p>This is not possible. Most obviously, there are only a handful of pass catchers in 
            NFL history who have played even 15 quality seasons. The players that have - 
            Fitzgerald, Terrell Owens, Tony Gonzalez, Jason Witten, etc. - retired far, far 
            away from the mountaintop. The part about reaching 1,100 yards is not the hard part; 
            since the 2000 NFL season, an average of 15 receivers per year will reach this mark, 
            but expecting this kind of production year after year is not realistic. Also, Jerry 
            Rice himself missed virtually the entire 1997 season with an injury, so to ask for 
            no injuries is too unrealistic.
          </p>
          <li>Play 15 seasons, averaging 1,500 yards per season, without injury</li>
          <p>This has an even slimmer chance of happening; in this same time span only about two 
            receivers per year reach 1,500 yards (41 such seasons since 2000). That mark is 
            almost always enough to be top-three in the league, and that pace is not sustainable 
            for more than a few years at a time.
          </p>
        </ol>
        <p>Also, did I mention that (1,100 * 20) is 22,000 yards, and (1,500 * 15) = 22,500 yards, 
          both of which are STILL short of the record? If there's a receiver out there who 
          feels capable of climbing this mountain, all I have to say is this: you better start now. 😅
        </p>
        <h2>Receiving Touchdowns</h2>
        <p>
          Touchdowns are another category where no one threatens to surpass Jerry. Once again, I'll 
          show you two charts: one without him, and then with. Randy Moss is another 
          name often mentioned in debates over the greatest receiver of all time. A main reason 
          for this is touchdowns - his 156 touchdown catches are insanely impressive, and give 
          him a slim three-touchdown lead over the bronze medalist Terrell Owens.
        </p>
        <div id='receiving_touchdowns_2_25' class='image-in-article'></div>
        <p>
          But here's the same graph with Jerry.
        </p>
        <div id='receiving_touchdowns_1_25' class='image-in-article'></div>
        <p>
          Rice's 197 touchdown catches stand 26% above Moss' career total. In these two 
          categories he is untouchable; although a receiver could hypothetically catch 198 
          touchdowns from the 1-yard line, teams that have even a decent running back will tend 
          to run the ball in the red zone. That's what makes Jerry Rice's touchdown figure even 
          more impressive - during his career with the 49ers, he had to share the ball with some 
          outstandingly talented skill position players, including notables Roger Craig and 
          Garrison Hearst.
        </p>
        <div id='total_touchdowns_bar' class='image-in-article'></div>
      </div>
    </div>
  );
}

export default App;
