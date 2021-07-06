import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';

function NewMeetupPage() {

    const router = useRouter();

    const addMeetupHandler = async (enteredMeetupData) => {

        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.data;
        router.push('/');
    }
    return (
        <>
            <Head>
            <title>Add a New Meetup</title>
            <meta name="description" content="Add your own meetups and create amazing networking opportunities!"></meta>
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>);
}

export default NewMeetupPage;