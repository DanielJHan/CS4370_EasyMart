'use client'

import '../styles/Body.css'
import ArticleGrid from "./ArticleGrid";
import { articles } from '../data';

function Body() {
    
    return (
        <div className="body">
            <ArticleGrid articles={articles}></ArticleGrid>
        </div>
        
    )
}

export default Body;