'use client'

import Header from '../components/Header';
import '../styles/ArticleGuide.css'
import '../styles/Wrapper.css'
import './Ohtani.css'

function App() {
  return (
    <div id='wrapper'>
      <Header></Header>
      <div className='full'>
        <h1>Shohei Ohtani Just Made Baseball History, and the Season Isn't Even Over Yet</h1>
        <div id='lead_image'></div>
        <i id='source2'>Image courtesy of Today Show</i>
      </div>
    </div>
  );
}

export default App;
