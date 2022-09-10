import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>New User Page</p>
      </Route>
    </div>
  );
};

export default Welcome;
