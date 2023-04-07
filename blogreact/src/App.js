// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";
import { React, useState } from "react";

// function App() {
//   return (
//     <div className="container">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);
    const getData = (blog) => {
      setGetBlogContent(blog);
    }
    return (
      <div>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage data={getData}/>} />
            <Route path="/blog/:id" element={<BlogPost content={getBlogContent}/>} />
          </Routes>
        </div>
      </div>
    );
  }
export default App;
