import React from "react";
import contacts from "./contacts";
import Card from "./Card";

function App() {
  return (
    <div>
      {contacts.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          imgURL={item.imgURL}
          phone={item.phone}
          email={item.email}
        />
      ))}
    </div>
  );
}

export default App;
