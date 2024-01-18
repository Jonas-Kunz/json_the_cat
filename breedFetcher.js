const request = require("request");
let breed = process.argv.slice(2, 3).join();

const breedFetcher = function(URL /*path*/) {
  request(`${URL}`, (error, response, body) => {
    // if request is wrong and it no work run error
    if (error) {
      console.log("error:", error);
      return error;
    }
    // logs the status code
    console.log("statusCode:", response && response.statusCode);
    // parses the body into usable data
    const data = JSON.parse(body);
    // if cat doesnt exist server will not send data, this notifies user of that
    if (data.length === 0) {
      console.log("No breed of that name found. Please enter a valid breed");
      return "No breed of that name found. Please enter a valid breed";
    }
    // if the url is incorrect returns servers 404 response
    if (response.statusCode !== 200) {
      console.log(data.message);
      return data.message;
    }
    //logs result
    let result = data[0].description;
    console.log(result);
    return result;
  });
};

breedFetcher(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`);
