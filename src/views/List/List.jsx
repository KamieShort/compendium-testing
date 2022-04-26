import React, { useEffect, useState } from 'react';
import { fetchQuotes } from '../../services/fetch';

export default function QuoteList() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const getQuotes = async () => {
      const data = await fetchQuotes();

      setQuotes(data);
      setLoading(false);
    };

    getQuotes();
  }, []);

  return (
    <>
      {}
      <h2>Futurama Quotes</h2>
      {loading ? (
        <p>Loading..</p>
      ) : (
        <>
          <input placeholder="search" value={search} onChange={handleSearch} />

          {quotes.map((quote) => (
            <div key={quote.id}>
              <h2>{quote.character}</h2>
              <p>{quote.quote}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
}
