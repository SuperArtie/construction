'use strict';


function Room(name, length, width, height, floor, color)
{
  this.name = name;
  this.length = parseFloat(length);
  this.width = parseFloat(width);
  this.height = parseFloat(height);
  this.floor = floor;
  this.color = color;
}

Room.prototype.area = function()
{
  return this.length*this.width;
};

Room.prototype.wall = function()
{
  return ((this.length*this.height*2)+(this.width*this.height*2))/2;
};

Room.prototype.cost = function()
{
  var per = 0;
  switch(this.floor[0])
  {
    case 'c':
      per = this.area()*15;
      break;
    case 't':
      per = this.area()*12;
      break;
    case 'w':
      per = this.area()*10;
      break;
  }
  return per + this.wall();
};

module.exports = Room;
