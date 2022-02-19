import { baseURL } from './apis.js';

const counter = async () => {
  const res = await fetch(baseURL);
  const json = await res.json();
  return json;
};

export default counter;