import { Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>The Welcome Page</h1>
      <Routes>
        <Route path="new-user" element={<p>New User Page</p>} />
      </Routes>
    </div>
  );
};

export default Welcome;
