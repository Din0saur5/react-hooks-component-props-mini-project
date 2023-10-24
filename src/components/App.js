import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header  name= {blogData.name}/>
      <About {... blogData}/>
      <ArticleList {...blogData}/>
    </div>
  );
}

export default App;
/* 
make header component
make about somponent
artile list component
|_>with article component

*/