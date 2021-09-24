import React from 'react'

const QuoteAuthor = (props) => {
  return (
    <div>
      <h1>{props.author}</h1>
      <p>{props.about}</p>
      
    </div>
  )
}

export default QuoteAuthor
