const chai = require('chai');
const request = require('request');

const expect = chai.expect;
const devSrv = 'http://localhost:7865';

describe('Request dev server path', () => {
  it('Returns status code 200', (done) => {        
    request.get(devSrv, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Returns result of the body', (done) => {
    request.get(devSrv, function(err, res, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
