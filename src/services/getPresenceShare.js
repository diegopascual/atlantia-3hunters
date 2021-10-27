import { API_URL } from "./settings";

const getPresenceShare = () => {
  const endpoint = `${API_URL}/presence-share-chart/`;

  return fetch(endpoint).then((response) => response.json());
};

export default getPresenceShare;
