var server = require('../index');
var supertest = require('supertest');

describe('routes tests ', function() {

    it('add rout should return ok 200 with parameters', function(done) {
        var app = supertest(server);
        app.get('/add?numberA=2&numberB=2')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('add rout should return error 500 without parameters', function(done) {
        var app = supertest(server);
        app.get('/add?numberA=&numberB=')
            .set('Accept', 'application/json')
            .expect(500, done);
    });

    it('subtract route should return ok 200', function(done) {
        var app = supertest(server);
        app.get('/subtract?numberA=2&numberB=2')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('multiply route should return ok 200', function(done) {
        var app = supertest(server);
        app.get('/multiply?numberA=2&numberB=2')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('divide route should return ok 200', function(done) {
        var app = supertest(server);
        app.get('/divide?numberA=2&numberB=2')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('divide route should return error 500 without parameters', function(done) {
        var app = supertest(server);
        app.get('/divide?numberA=2&numberB=0')
            .set('Accept', 'application/json')
            .expect(500, done);
    });
});