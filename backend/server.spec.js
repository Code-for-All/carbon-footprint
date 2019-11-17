process.env.NODE_ENV = 'test';
var request = require('supertest');

describe('loading express', function () {
    var server;
    beforeEach(function () {
        server = require('./server');
    });
    afterEach(function () {
        server.close();
    });
    it('returns swagger.json', function testSlash(done) {
        request(server)
            .get('/swagger.json')
            .expect(200, done);
    });
    it('responds to /', function testSlash(done) {
        request(server)
            .get('/journeys')
            .expect(401, done);
    });
    it('404 everything else', function testPath(done) {
        request(server)
            .get('/')
            .expect(404, done);
    });
});
