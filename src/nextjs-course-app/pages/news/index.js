//domain.com/news

import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1> The Details Page!</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a">NextJS is a react framework</Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
