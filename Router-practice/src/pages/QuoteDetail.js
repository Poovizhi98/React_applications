import React, { useEffect } from 'react';
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = (props) => {

    const { sendRequest, data, error, status } = useHttp(getSingleQuote, true);

    const match = useRouteMatch();

    const params = useParams();

    const { quoteId } = params;

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (error) {
        return <p className='centered'>
            {error}
        </p>
    }

    if (status === 'pending' || data.length === 0) {
        return <div className="centered">
            <LoadingSpinner/>
        </div>
    }

    if (!data.text) {
        return <p className='centered'>No quote found!</p>
    }

    return (
        <div>
            <h1>QuoteDetail</h1>
            <HighlightedQuote text={data.text} quote={data.quote} author={data.author}/>
            <Route exact path={`${match.path}`}>
                <div className='centered'>
                <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </div>
    );
}

export default QuoteDetail;