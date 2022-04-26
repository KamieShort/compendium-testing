import React, { useEffect, useState } from 'react';
import { fetchQuotes } from '../../services/fetch';

export default function QuoteList() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getQuotes = async () => {
      const data = await fetchQuotes();

      setQuotes(data);
      console.log(data);
    };

    getQuotes();
  }, []);

  return (
    <>
      <h2>Futurama Quotes</h2>

      {quotes.map((quote) => (
        <div key={quote.id}>
          <h2>{quote.character}</h2>
          <p>{quote.quote}</p>
        </div>
      ))}
    </>
  );
}
