const {breedFetcher} = require("./breedFetcher");
//let breedName = process.argv.slice(2, 3).join();

breedFetcher(breedName, (error, desc, status) => {
  if (error) {
    return error;
  } else {
    return desc;
  }
});

module.exports = {breedFetcher}