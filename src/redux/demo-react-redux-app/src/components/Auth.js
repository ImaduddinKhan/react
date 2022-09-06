import classes from "./Auth.module.css";

import { authActions } from "../store/auth-slice";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (eve) => {
    eve.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
