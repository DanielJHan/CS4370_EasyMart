'use client'

import '../styles/NewArticle.css'
import Link from 'next/link'

function NewArticle({ title, imageUrl, description, link, source, date }) {
    const divStyle = {
        backgroundImage: `url(${imageUrl})`, // Set the background image
      };
    
    return (
        <div className="article-whole">
            <div className='image' style={divStyle}></div>
            <div className="article-preview">
                <Link href={link} className='article-title'><h2>{title}</h2></Link>
                
                    <p>{description}</p> 
                    {source && source.length != 0 && <i id='source'>Media courtesy of {source}</i>}
                    {date && date.length != 0 && <em id='date'>{date}</em>}
            </div>
        </div>
    );
}

export default NewArticle;