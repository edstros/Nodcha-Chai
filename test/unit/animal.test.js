var path = require('path');
var should = require('chai').should();
var Animal = require(path.join(process.cwd() + '/lib/Animal'));

//you can .skip a test if it's a slow test
describe('Animal', function () {
  describe('constructor', function () {
    it('should return an animal object', function () {
      var animal = new Animal();
      animal.should.be.an('object');
      animal.should.be.an.instanceOf(Animal);
    });
    it('should be alive', function () {
      var animal = new Animal();
      animal.isAlive.should.be.true;
      //defined in Animal.js
    });
    it('should have 100% health', function () {
      var animal = new Animal();
      animal.health.should.equal(1);
    });
    it('should accept a type', function () {
      var cat = new Animal('cat');
      var dog = new Animal('dog');
      cat.type.should.equal('cat');
      dog.type.should.equal('dog');
    })
  });
  describe('#updateHealthStats', function () {
    it('should change the health', function (done) {
      //need done agrument passed into the it block so that it waits on timeout
      var animal = new Animal();
      animal.updateHealthStats(function () {
        animal.health.should.not.equal(1);
        done();
      });
    })
  })
  describe('#beCute()', function () {
    it('should be a prototype method', function () {
      var animal = new Animal();
      animal.should.respondTo('beCute');
      animal.should.not.have.ownProperty('beCute');
    });
    it('should make the animal cute', function () {
      var animal = new Animal();
      should.not.exist(animal.isCute);
      //no cute animals until beCute
      animal.beCute();
      animal.isCute.should.be.true;
    });
  });
});
