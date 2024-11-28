// Test cases for the API
const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe("Index page", function() {
  it("tests status code and result", function(done) {
    const url = "http://127.0.0.1:7865/available_payments";
    request.get(url)
      .on('response', (response) => {
        expect(response.statusCode).to.equal(200);
	done();
      })
      .on('error', (error) => done(error));
  });
});
