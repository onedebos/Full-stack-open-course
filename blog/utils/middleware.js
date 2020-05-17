const unknownEndPoint = (request, response) => {
  response.status(404).send({ error: "Endpoint does not exist" });
};

module.exports = { unknownEndPoint };
