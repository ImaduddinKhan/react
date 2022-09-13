import { NavLink, useRouteMatch } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const match = useRouteMatch();
  console.log(match);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/newquote" activeClassName={classes.active}>
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
