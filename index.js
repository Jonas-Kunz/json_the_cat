const breedFetcher = require("./breedFetcher");
let breedName = process.argv.slice(2, 3).join();

breedFetcher(breedName, (error, desc, status) => {
  console.log("Status: ", status);
  if (error) {
    console.log("error fetch details: ", error);
  } else {
    console.log(desc);
  }
});
