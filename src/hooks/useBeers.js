import { useState, useEffect } from "react";
import getBeerProducts from "services/getBeerProducts";

const useBeers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    setLoading(true);
    getBeerProducts().then((response) => {
      if (response?.message) {
        setError(response.message);
        setLoading(false);
        return;
      }

      setBeers(response);
      setLoading(false);
    });
  }, []);

  return { loading, error, beers };
};

export default useBeers;
