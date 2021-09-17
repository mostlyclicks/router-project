import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  {id: 1, author: 'Max', text: 'Learning react is fun'},
  {id: 2, author: 'Carlos', text: 'Learning react is great'}
]

const AllQuotes = () => {
  return (
    <div>
      <h1>All Quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  )
}

export default AllQuotes
