import { useState, useEffect } from "react";
import getPresenceShare from "services/getPresenceShare";

const usePresenceShare = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [presences, setPresences] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPresenceShare().then((response) => {
      if (response?.message) {
        setError(response.message);
        setLoading(false);
        return;
      }

      setPresences(response);
      setLoading(false);
    });
  }, []);

  return { loading, error, presences };
};

export default usePresenceShare;
