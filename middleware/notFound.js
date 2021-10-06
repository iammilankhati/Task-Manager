//Not found page when url is not matched..
const notFound = (req, res) => {
  res.status(404).send(`No route with the given url....`);
};

module.exports = notFound;
