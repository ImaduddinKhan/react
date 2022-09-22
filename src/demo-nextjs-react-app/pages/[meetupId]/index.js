import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      title="A first meetup"
      address="Some sector, street, house no"
      description="The meetup description"
    />
  );
};

export default MeetupDetails;
