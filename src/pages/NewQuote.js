import React from 'react'
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {

  const history = useHistory()

  const addQuoteHandler = quoteData => {
    console.log(quoteData)
    history.push('/quotes')
  }

  return (
    <div>
      <h1>Add a Quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  )
}

export default NewQuote
