import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoding, setIsLoding] = useState(false);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  const switchAuthModeHandler = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  const submitHandler = (eve) => {
    eve.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log("Email:" + enteredEmail + " Password:" + enteredPassword);

    setIsLoding(true);
    let url;
    const apiKey = `${process.env.REACT_APP_API_KEY}`;
    const signIn = `${process.env.REACT_APP_SIGNIN}`;
    const signUp = `${process.env.REACT_APP_SIGNUP}`;

    if (isLogin) {
      url = `${signIn}${apiKey}`;
    } else {
      url = `${signUp}${apiKey}`;
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setIsLoding(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((resData) => {
            let errMessage = "Authentication failed";

            // if (resData && resData.error && resData.error.message) {
            //   errMessage = resData.error.message;
            // }
            throw new Error(errMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
    // setEnteredEmail("");
    // setEnteredPassword("");
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            required
            // value={enteredEmail}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            // value={enteredPassword}
          />
        </div>
        <div className={classes.actions}>
          {!isLoding && <button>{isLogin ? "Login" : "Create Account"}</button>}
          {isLoding && <p>Creating accout ...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
