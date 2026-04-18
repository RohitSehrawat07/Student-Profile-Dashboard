// StudentCard.js
import React, { useState } from "react";
import "./StudentCard.css";

function StudentCard({ name, rollNo, course, image, bio }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="student-card">
      <img src={image} alt={name} className="student-image" />
      <h2>{name}</h2>
      <p><strong>Roll No:</strong> {rollNo}</p>
      <p><strong>Course:</strong> {course}</p>
      <p>{bio}</p>
      <button onClick={() => setLikes(likes + 1)}>
        👍 Like {likes}
      </button>
    </div>
  );
}

export default StudentCard;
