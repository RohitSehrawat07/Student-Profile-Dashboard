// App.js
import React from "react";
import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  const students = [
    {
      name: "Rohit Sehrawat",
      rollNo: "024",
      course: "Computer Science",
      image: "https://via.placeholder.com/150",
      bio: "Passionate about AI and web development."
    },
    {
      name: "Rahul Sharma",
      rollNo: "102",
      course: "Information Technology",
      image: "https://via.placeholder.com/150",
      bio: "Enjoys solving algorithms and building apps."
    },
    {
      name: "Sophia Lee",
      rollNo: "103",
      course: "Electronics",
      image: "https://via.placeholder.com/150",
      bio: "Interested in IoT and embedded systems."
    }
  ];

  return (
    <div className="App">
      <h1>Student Profile Cards</h1>
      <div className="card-container">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  );
}

export default App;


// import { useState , useEffect, createContext } from "react";
// import BlogCard from "./BlogCard";
// import Navbar from "./Navbar";
// import { BroweserRouter, Routes, Route } from "react-router";
// const LikeContext = createContext();
// function App() {
//   const [posts, setPosts] = useState([]);
//   const [likes, setLikes] = useState(0);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(data =>{

//        setPosts(data)
//       }) 
//       .catch(error => console.error("Error fetching posts:", error));
//   }, []);

//   return (
//     <LikeContext.Provider value={{ likes, setLikes }}>
//       <div className="App">
//         <Navbar />
//         <BlogCard posts={posts} />
//       </div>
//     </LikeContext.Provider>
//   );
// }

// export default App;
// export { LikeContext };