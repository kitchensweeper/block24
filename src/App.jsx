import React, { useState } from "react";
import { puppyList } from "./data";
import "./App.css";

function App() {
  console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <>
      <h1
        onClick={() => {
          setFeatPupId(null);
        }}
      >
        Puppy Pals
      </h1>

      {featPupId && (
        <div className="rendered_info">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

      {puppies.map((puppy) => (
        <p
          className="listNames"
          onClick={() => {
            setFeatPupId(puppy.id);
          }}
          key={puppy.id}
        >
          {puppy.name}
        </p>
      ))}
    </>
  );
}

export default App;

// Clicking a puppy from the list generates a
// detailed view of that puppy elsewhere
// in the application.
