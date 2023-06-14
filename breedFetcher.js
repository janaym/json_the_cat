const request = require('request');

const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("No information found for that breed. Maybe it does not exist");
    return;
  }
  //console.log(data, typeof(data));

  console.log(data[0].description);
});