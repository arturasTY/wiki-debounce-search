import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ResultItem } from './ResultItem';
import ResultItemSkeleton from './skeletons/ResultItemSkeleton';

const ResultList = ({searchQuery}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const wikiParameters = {
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
        .get('https://en.wikipedia.org/w/api.php', wikiParameters, { signal })
        .then((response) => {
          if(response.data.query) {
            setData(response.data);
            setLoading(false);
            setError(null)
          } else {
            setError('Nothing Found, try something else!')
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
    return <div className="results__error"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8.5 18 3.5 4 3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.5zM7.293 6.707l1.414-1.414L12 8.586l3.293-3.293 1.414 1.414L13.414 10l3.293 3.293-1.414 1.414L12 11.414l-3.293 3.293-1.414-1.414L10.586 10 7.293 6.707z"/></svg>&nbsp;{error}</div>;
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