import UserFinder from "./Components/UserFinder";
import UserContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "TestUser1" },
  { id: "u2", name: "TestUser2" },
  { id: "u3", name: "TestUser3" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };
  return (
    <UserContext.Provider value={usersContext}>
      <UserFinder />
    </UserContext.Provider>
  );
}

export default App;
