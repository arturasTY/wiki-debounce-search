import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ResultItem } from './ResultItem';
import ResultItemSkeleton from './skeletons/ResultItemSkeleton';

const ResultList = ({searchQuery}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const parameters = {
    params: {
        action: 'query',
        generator: 'search',
        gsrlimit: 20,
        gsrsearch: searchQuery,
        prop: 'pageimages|extracts|pageviews',
        exchars: 100,
        exintro: true,
        explaintext: true,
        exlimit: 'max',
        format: 'json',
        origin: '*',
    }
  }

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    
    if (searchQuery) {
      setLoading(true);
      axios
        .get('https://en.wikipedia.org/w/api.php', parameters, { signal })
        .then((response) => {
          if(response.data.query) {
            setData(response.data);
            setLoading(false);
            setError(null)
          } else {
            setError('No data found')
            setLoading(false);
          }
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
    return () => {
      abortController.abort();
    };
  }, [searchQuery]);

  if (loading) {
    return <ResultItemSkeleton />
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="results">
      {data && (
        <ul className="results__list">
          {Object.values(data?.query?.pages || {}).map(res => (
            <ResultItem key={res.pageid} res={res} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResultList