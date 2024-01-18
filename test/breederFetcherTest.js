const { breedFetcher } = require("../breedFetcher");
const { assert } = require("chai");

describe("breedFetcher", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    breedFetcher("siberian", (err, desc, status) => {
      // we expect no error for this scenario

      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it("returns a error for an invalid breed via callback", (done) => {
    breedFetcher("Dog Man", (err, desc, status) => {
      // we expect no error for this scenario
      console.log(err);
      assert.equal(
        err,
        "No breed of that name found. Please enter a valid breed"
      );

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      done();
    });
  });
});
