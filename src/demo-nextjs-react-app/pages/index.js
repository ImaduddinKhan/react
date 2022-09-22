import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP_LIST = [
  {
    id: "m1",
    title: "A Meetup",
    image:
      "https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    address: "Some address Lane 3, House 338",
    description: "This is my first meetup",
  },
  {
    id: "m2",
    title: "An another Meetup",
    image:
      "https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    address: "Some address Lane 3, House 338-A",
    description: "This is my second meetup",
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  //fetch data from api

  return {
    props: {
      meetups: DUMMY_MEETUP_LIST,
    },
  };
};

// export const getStaticProps = async () => {
//   //any code here we want to be rendered on server,
//   //and will never exec on the client side

//   return {
//     props: {
//       meetups: DUMMY_MEETUP_LIST,
//     },
//     revalidate: 5,
//   };
// };

export default HomePage;
