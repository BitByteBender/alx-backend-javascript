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

describe('GET /cart/:id', () => {
  const id = 12;

  it('Returns a status code 200 when :id is a num', (done) => {
    request.get(`${devSrv}/cart/${id}`, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Returns a body content when :id is a num', (done) => {
    request.get(`${devSrv}/cart/${id}`, function(err, res, body) {
      expect(body).to.equal(`Payment methods for cart ${id}`);
      done();
    });
  });

  it('Returns a status code 404 when :id is not a num', (done) => {
    request.get(`${devSrv}/cart/test`, function(err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('GET /available_payments', () => {
  it('Returns payment methods obj', (done) => {
    request.get(`${devSrv}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      const Result = {
          payment_methods: {
          credit_cards: true,
          paypal: false,
	},
      };
      expect(JSON.parse(body)).to.deep.equal(Result);
      done();
    });
  });
});

describe('POST /login', () => {
  it('Returns welcoming message for a valid userName', (done) => {
    const rslt = { userName: 'Betty' };
    const dt = {
      method: 'POST',
      url: `${devSrv}/login`,
      json: true,
      body: rslt,
    };
    request(dt, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal('Welcome Betty');
      done();
    });
  });

  it('Returns 400 for a missing userName', (done) => {
    const rslt = { userName: 'Betty' };
    const dt = {
      method: 'POST',
      url: `${devSrv}/login`,
      json: true,
      body: rslt,
    };
    request(dt, (err, res, body) => {
      expect(err).to.be.null;
      expect(res.statusCode).to.equal(400);
      done();
    });
  });
});
