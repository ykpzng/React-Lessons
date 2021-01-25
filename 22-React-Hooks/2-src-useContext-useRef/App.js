import React, { useState } from "react";
// import "./styles.css";
import UserList from "./UserList";
import { UserContext } from "./context/UserContext";
import UseRefComp from "./useRefComp";

//prettier-ignore
const data = [
  { id: 1, name: "Tommy", email: "tommy@email.com", age: 25, color: "red" },
  { id: 2, name: "Ela", email: "ela@email.com", age: 30, color: "blue" },
  { id: 3, name: "Cake", email: "cake@email.com", age: 35, color: "yellow" }
];

const App = () => {
  const [users, setUsers] = useState(data);

  const changeColor = (id, color) =>
    setUsers(
      users.map(user => (user.id === id ? { ...user, color: color } : user))
    );

  return (
    // <UserContext.Provider value={{ changeColor, users }}>
    //   <div className="App">
    //     <header>
    //       <h1>Welcome!</h1>
    //     </header>
    //     <UserList />
    //   </div>
    // </UserContext.Provider>
    <div>
      <UseRefComp />

    </div>
  );
};

export default App;



// React Hooks
// Hooks ta 5 adet keyword vardır;
/*
    //(1)-- useState       (state tanımlaması ve değiştirilmesi)
    //(2)-- useEffect      (React Lifecycle işlemleri burada yapılır)
    -- useContext          (state taşıma işlemi)
    -- useRef (createRef)  (Dom elemanlarına direk erişmek için)
    -- useReducer

*/