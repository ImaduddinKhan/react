import { Fragment, useEffect, useState } from "react";
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

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send http request and fetch data

    setLoadedMeetups(DUMMY_MEETUP_LIST);
  }, []);
  return (
    <Fragment>
      <MeetupList meetups={loadedMeetups} />
    </Fragment>
  );
}
export default HomePage;
