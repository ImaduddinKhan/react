//domain.com/news/somthing-imp

import { useRouter } from "next/router";

const SomethingImp = () => {
  const router = useRouter();
  console.log(router.query.newsId);
  const newsId = router.query.newsId;

  return <h1> The Details Page!</h1>;
};

export default SomethingImp;
