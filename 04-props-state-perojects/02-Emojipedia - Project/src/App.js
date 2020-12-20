import React from "react";
import emojipedia from "./emojipedia";
import Entry from "./Entry";

export default function App() {
  return (
    <div>
      <h1>Emojies</h1>
      <div className="dictionary">
        {emojipedia.map((item) => (
          <Entry
            key={item.id}
            emoji={item.emoji}
            name={item.name}
            meaning={item.meaning}
          />
        ))}
      </div>
    </div>
  );
}
