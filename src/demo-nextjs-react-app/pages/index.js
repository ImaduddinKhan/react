import { MongoClient } from "mongodb";
import Head from "next/head";

import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList.js";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Add your own meetups and enjoy our app"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from api

//   return {
//     props: {
//       meetups: DUMMY_MEETUP_LIST,
//     },
//   };
// };

export const getStaticProps = async () => {
  //any code here we want to be rendered on server,
  //and will never exec on the client side
  //fetch data from api

  const client = await MongoClient.connect(
    process.env.REACT_APP_API_MONGOCLIENT
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
