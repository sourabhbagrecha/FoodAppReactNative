import { useState, useEffect } from "react";
import Yelp from '../api/yelp';

export default (setLoading) => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    search('pasta')
  }, []);

  const search = async (term) => {
    try {
      const {data} = await Yelp.get(`/search`, {
        params: {
          limit: 50,
          term,
          location: 'san jose'
        }
      });
      setResults(data.businesses);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setErrorMessage('Something went wrong!');
    }
  }

  return [results, errorMessage, search];
}