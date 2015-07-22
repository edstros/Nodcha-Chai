var path = require('path');
var should = require('chai').should();
var Animal = require(path.join(process.cwd() + '/lib/Animal'));
var cp = require('child_process');
//process.cwd goes to the root dir, so it can go to any directory from the root
//path.join gives you a proper path, but need to be defined
describe('Tests', function () {
  it('truthyness', function () {
    true.should.equal(true);
  });
});

describe('CLI', function(){
  it('should thank me for downloading', function (done){
    console.log('childprocess');
    cp.execFile('./app.js', function (err, stdout) {
      console.log('err', err);
      console.log('stdout', stdout);
      stdout.should.equal('Thanks for downloading my app!\n');
      //fails when console.log() from app.js has different output
      done();
    });
  })
});


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
describe('Array', function () {
  describe('#filter()', function () {
    it('should return an array of items that return truthy in the innner fn', function () {
      var array = [1, 2, 3, 4, 5];
      var output = array.filter(function (item) {
        return item % 2;
        //filter out even numbers
      });
      output.should.eql([1, 3, 5]);
    });
  });
  describe('#map()', function () {
    it('should create an array with the return value of the inner fn', function () {
      var array = [1, 2, 3, 4, 5];
      var output = array.map(function (item) {
        return item * item;
      });
      output.should.eql([1, 4, 9, 16, 25]);
    });
    it('should keep the same length', function () {
      var array = [1, 2, 3, 4, 5];
      var length = array.map(function (item) {
        return false;
      }).length;
      length.should.equal(array.length);
    });
    it('should not mutate the original array', function () {
      var array = [1, 2, 3, 4, 5];
      array.map(function () {
        return false;
      });
      array.should.eql([1, 2, 3, 4, 5]);
    });
  });
});
