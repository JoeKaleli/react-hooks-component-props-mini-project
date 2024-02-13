import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";


console.log(blogData);

function App() {
  return (
    
    <div className="App">
      <Header blogName='Kaleli'/>
      <About img={blogData.image} about={blogData.about}/>
      <ArticleList articles={blogData.posts} />
    </div>
  );
}

export default App;
