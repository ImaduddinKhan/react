import classes from "./UserProfile.module.css";
import ProfileForm from "./ProfileForm";

const UserProfile = (props) => {
  return (
    <div className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </div>
  );
};

export default UserProfile;
