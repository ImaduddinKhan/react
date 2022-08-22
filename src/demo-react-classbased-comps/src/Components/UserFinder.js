import { Fragment, useState, useEffect } from "react";

import classes from "./UserFinder.module.css";

import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "TestUser1" },
  { id: "u2", name: "TestUser2" },
  { id: "u3", name: "TestUser3" },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type="search" onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;
