import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "./context/UserContext";

const UserList = () => {
  const { users } = useContext(UserContext);
  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <User key={user.name} user={user} />
      ))}
    </div>
  );
};

export default UserList;

