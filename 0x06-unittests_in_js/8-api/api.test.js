const chai = require('chai');
const request = require('request');

const expect = chai.expect;
const devSrv = 'http://localhost:7865';

describe('Request dev server path', () => {
  let server;

  before((done) => {
   server = app.listen(7865, 'localhost', () => {
     console.log('Dev server running on port 7865');
     done();
   });
  });

  after((done) => {
    server.close(() => {
      console.log('Dev server stopped');
      done();
    });
  });

  it('Returns status code 200', function(done) {
    request.get(devSrv, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Returns result of the body', function(done) {
    request.get(devSrv, function(err, res, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
