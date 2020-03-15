import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  axios.get(baseUrl);
};

export { getAll };
