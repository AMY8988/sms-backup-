import AppContext from '@/js/Store/app-context';
import axios from 'axios';
import {useContext} from 'react';
import {useEffect, useState} from 'react';

export function useInfiniteLoad (queryUrl, pageNumber) {
  const [data, setData] = useState ([]);

  const [error, setError] = useState (false);
  const [hasMore, setHasMore] = useState (false);

  const {
    query,
    setQuery,
    StudentsArr,
    setStudentsArr,
    totalPages,
    setTotalPages,
    loading,
    setLoading,
  } = useContext (AppContext);

  useEffect (
    () => {
      setData ([]);
    },
    [queryUrl]
  );

  console.log (queryUrl);

  useEffect (
    () => {

      // console.log(queryUrl, "queryUrl", pageNumber, "pageNumber");
      if (queryUrl === null || pageNumber === null) return;
      let controller;
      controller = new AbortController ();
      const signal = controller.signal;
      setLoading (true);
      setError (false);
      // console.log(loading)
      queryUrl?.searchParams.set ('page', pageNumber || 1);

      // const url = new URL (searchUrl);
      // url.searchParams.append ('keyword', query.keyword);
      // url.searchParams.append ('cv', query.cv);
      // const students = await axios.get (url).then (res => {
      //     // console.log(res.data)
      //   return res.data.data;

      // });
      window.history.pushState (
        {},
        '',
        'students?' + new URLSearchParams (query).toString ()
      );

      axios
        .get (queryUrl)
        .then (res => {
          setData (prevState => {
            console.log (
              prevState,
              '..prevState',
              res.data.data,
              'res.data.data'
            );
            return [...new Set ([...prevState, ...res.data.data])];
          });

          setHasMore (res.data.current_page < res.data.last_page);
          setTotalPages (res.data.last_page);
          // console.log(res.data.current_page , 'hasMore')

          setLoading (false);
        })
        .catch (error => {
          setLoading (false);
          if (error.code === 20) return; // 20 = user cancelled request
          setError (true);
        });
      return () => {
        if (controller) {
          controller.abort ();
        }
      };
    },
    [queryUrl, pageNumber]
  );
  //   console.log(data);

  return {
    data,
    isLoading: loading,
    isError: error,
    hasMore,
    totalPages,
  };
}
