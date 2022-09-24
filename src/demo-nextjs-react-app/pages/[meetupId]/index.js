import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name={props.meetupData.title}
          content={props.meetupData.description}
        />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    process.env.REACT_APP_API_MONGOCLIENT
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  //fetch data for single meetup
  const client = await MongoClient.connect(
    process.env.REACT_APP_API_MONGOCLIENT
  );

  const db = client.db();
  const meetupId = context.params.meetupId;

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id: meetups._id.toString(),
        title: meetups.title,
        address: meetups.address,
        image: meetups.image,
        description: meetups.description,
      },
    },
  };
};

export default MeetupDetails;
