import React, { Fragment } from 'react'
import { useParams, Route, Link } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
  {id: "1", author: 'Max', text: 'Learning react is fun'},
  {id: "2", author: 'Carlos', text: 'Learning react is great'}
]

const QuoteDetail = () => {

  const params = useParams()

  //use id to get quote details from allQuotes but use pasted in dummydata for now
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return <p>No quote found!</p>
  }


  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className='centered'><Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link></div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
        <Link to={`/quotes/${params.quoteId}`} className="centered">Hide Comments</Link>
      </Route>

    </Fragment>
  )
}

export default QuoteDetail
