import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import "./App.css";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  // usersList = [
  //   { name: "Madu", age: "28" },
  //   { name: "Hello", age: "38" },
  // ];

  const addUserHandler = (uesrName, userAge) => {
    setUsersList((prevStatesSnapshot) => {
      return [
        ...prevStatesSnapshot,
        { name: uesrName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    //React.Fragment can be used instead
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
