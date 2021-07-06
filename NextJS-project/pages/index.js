import { useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First Meetup',
        image: 'https://38i4h31480aw2fd03t4av02o-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/empire_state.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    }, 
    {
        id: 'm2',
        title: 'Second Meetup',
        image: 'https://38i4h31480aw2fd03t4av02o-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/empire_state.jpg',
        address: 'Some address 6, 12345 Some City',
        description: 'This is a second meetup!'
    }
]
    

function HomePage(props) {

    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list of highly active React meetups!"></meta>
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    )
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     return  {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//     }
// }

export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect(
      'mongodb+srv://Poovizhi98:Poovizhi98@cluster0.dozkg.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
  
    const meetupsCollection = db.collection('meetups');
  
    const meetups = await meetupsCollection.find().toArray();
  
    client.close();
  
    return {
      props: {
        meetups: meetups.map((meetup) => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 1,
    };
  }

export default HomePage;