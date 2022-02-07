const fetch = require('node-fetch');
var convert = require('xml-js');

const {flickerApi} = require('../config');

// Retrieve all data from the Flickr.
exports.fetchAll = async (req, res) => {
  try {
    const response = await fetch(flickerApi);
    const data = await response.text();

    //turn xlm to json
    let result = convert.xml2json(data, {compact: true, spaces: 4});

    if (!result)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving data.',
      });
    else res.send(JSON.parse(result).feed);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving data.',
    });
  }
};

// Retrieve all data search by query tags from the Flickr.
exports.searchByTag = async (req, res) => {
  const {tags} = req.query;

  try {
    const response = await fetch(`${flickerApi}tags=${tags}&tagmode=all`);
    const data = await response.text();

    //turn xlm to json
    let result = convert.xml2json(data, {compact: true, spaces: 4});

    if (!result)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving data.',
      });
    else res.send(JSON.parse(result).feed);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving data.',
    });
  }
};
