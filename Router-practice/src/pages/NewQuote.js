import React, { useEffect } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = (props) => {

    const history = useHistory();
    const { sendRequest, status } = useHttp(addQuote);

    useEffect(() => {
        if ( status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history])

    const addQuoteHandler = (quoteData) => {
        // send to server
        console.log(quoteData);
        sendRequest(quoteData);
    }

    return (
        <>
           <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
        </>
    );
}

export default NewQuote;