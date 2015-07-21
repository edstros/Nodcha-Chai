function Animal(type) {
  this.isAlive = true;
  this.type = type;
  this.health = 1;
  //lets animal accept a type (ie 'cat', 'dog')
  //pass the parameter in the function
};
Animal.prototype.beCute = function () {
  this.isCute = true;
  //so that beCute can make the animal cute
};
Animal.prototype.updateHealthStats = function (cb) {
 //this.health = Math.random();
   var self = this;
  setTimeout(function () {
    self.health = Math.random() * 100
  cb();
  }, 1000);
}
module.exports = Animal;
