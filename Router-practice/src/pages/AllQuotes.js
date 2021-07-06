import React, { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const AllQuotes = (props) => {

    const { sendRequest, status, data, error } =  useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest])

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner/>
        </div>
    }

    if (error) {
        return <p className='centered'>
            {error}
        </p>
    }

    if (status === 'completed' && (!data || data.length === 0)) {
        return <NoQuotesFound/>
    }

    return (
        <div>
           All Quotes 
           { status=== 'completed' && <QuoteList quotes={data}/> }
        </div>
    );
}

export default AllQuotes;