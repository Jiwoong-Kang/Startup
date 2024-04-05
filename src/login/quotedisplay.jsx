import React, { useState } from 'react';

export function QuoteDisplay() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  React.useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }, []);

  return (
    <div id="quote" className="quote-box bg-light text-dark">
      <p>{quote}</p>
      <p className="author">{author}</p>
    </div>
  );
}


