const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);

    let desc = null;

    //if search returns nothing
    if (data.length === 0) {
      error = "No information found for that breed. Maybe it does not exist";
    } else {
      //fetch description from data
      desc = data[0].description;
    }

    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };





