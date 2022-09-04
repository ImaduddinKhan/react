import classes from "./Auth.module.css";

const Auth = () => {
  return (
    <main className={classes.auth}>
      <section>
        <form>
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
