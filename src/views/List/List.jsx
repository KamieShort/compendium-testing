import React, { useEffect, useState } from 'react';
import { fetchQuotes } from '../../services/fetch';
import Search from '../../components/Search';

export default function QuoteList() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getQuotes = async () => {
      const data = await fetchQuotes();

      setQuotes(data);
      setLoading(false);
    };

    getQuotes();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuotes(search);
      setQuotes(data);
    };
    fetchData();
  }, [search]);

  return (
    <>
      {}
      <h1>Futurama Quotes</h1>
      {loading ? (
        <p>Loading..</p>
      ) : (
        <>
          <div>
            <Search query={search} setQuery={setSearch} />
          </div>

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
