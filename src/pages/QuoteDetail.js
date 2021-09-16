import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

const QuoteDetail = () => {

  const params = useParams()

  return (
    <Fragment>
      <h1>A Quote</h1>
      <p>{params.quoteId}</p>
    </Fragment>
  )
}

export default QuoteDetail
