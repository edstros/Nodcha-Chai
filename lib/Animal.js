function Animal(type) {
  this.isAlive = true;
  this.type = type;
  //lets animal accept a type (ie 'cat', 'dog')
  //pass the parameter in the function
  Animal.prototype.beCute = function () {
    this.isCute = true;
    //so that beCute can make the animal cute
  };
};
module.exports = Animal;
