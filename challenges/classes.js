// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(attr){
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;  
  }
  
  volume = function(){
    return this.length * this.height * this.width;
  }

  surfaceArea = function (){
    return 2* (this.length * this.width + this.length * this.height + this.width * this.height)
  }
}

var cuboid = new CuboidMaker({"length":4,"height":5,"width":5})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(attr){
    super(attr);
  }
  volume (){
    return (this.length)**3;
  }
  surfaceArea(){
    return 6 * (this.length**2);
  }
}

aCube = new CubeMaker({"length": 5, "width": 5, "height": 5});
console.log (aCube.length);
console.log(aCube.volume());
console.log(aCube.surfaceArea());