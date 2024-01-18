const request = require("request");

const breedFetcher = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      // if request is wrong and it no work run error
      // parses the body into usable data
      //console.log("response:", response);
      //console.log("Body:", body);
      const data = JSON.parse(body);
      // if cat doesnt exist server will not send data, this notifies user of that
      try {
        if (data.length === 0) {
          return callback(
            "No breed of that name found. Please enter a valid breed",
            null,
            response.statusCode
          );
        } else {
          return callback(null, data[0].description, response.statusCode);
        }
      } catch (err) {
        callback("API request ERROR:", null, null);
      }
    }
  );
};

module.exports = breedFetcher;
