import { API_URL } from "./settings";

const getBeerProducts = () => {
  const endpoint = `${API_URL}/beer-products/`;

  return fetch(endpoint).then((response) => response.json());
};

export default getBeerProducts;
