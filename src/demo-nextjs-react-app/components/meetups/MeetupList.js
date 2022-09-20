import MeetupItem from "./MeetUpItem";
import classes from "./MeetUpList.module.css";

const MeetUpItem = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          address={meetup.address}
          discription={meetup.discription}
        />
      ))}
    </ul>
  );
};

export default MeetUpItem;
