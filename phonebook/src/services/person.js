import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = contact => {
  return axios.post(baseUrl, contact);
};

const deleted = id => {
  return axios.delete(`${baseUrl}/${id}`);
};

const update = (updatedPerson, id) => {
  return axios.put(`${baseUrl}/${id}`, updatedPerson);
};

export default {
  getAll: getAll,
  create: create,
  deleted: deleted,
  update: update
};
