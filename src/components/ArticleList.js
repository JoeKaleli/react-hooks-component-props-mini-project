import React from "react";
import Article from "./Article";

function ArticleList(props) {
    return (
        
        <main>
            {props.articles.map((post) => (
                <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
            ))}
        </main>
    )
}

export default ArticleList;