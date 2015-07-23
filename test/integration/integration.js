var should = require('chai').should();
var cp = require('child_process');
//process.cwd goes to the root dir, so it can go to any directory from the root
//path.join gives you a proper path, but need to be defined

describe('CLI', function () {
  it('should thank me for downloading', function (done) {
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
