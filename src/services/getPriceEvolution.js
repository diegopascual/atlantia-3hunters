import { API_URL } from "./settings";

const getPriceEvolution = () => {
  const endpoint = `${API_URL}/price-evolution-chart/`;

  return fetch(endpoint).then((response) => response.json());
};

export default getPriceEvolution;
