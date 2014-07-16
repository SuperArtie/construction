'use strict';

function House(name, material, year)
{
  this.name = name;
  this.material = material;
  this.year = parseInt(year);
  this.rooms = [];
}

House.prototype.area=function()
{
  var hArea = 0;
  for(var i=0; i<this.rooms.length; i++)
  {
    hArea+= this.rooms[i].area();
  }
  return hArea;
};

House.prototype.cost=function()
{
  var sum = 0;
  for(var i=0; i<this.rooms.length; i++)
  {
    sum += this.rooms[i].cost();
  }
  return sum;
};

module.exports = House;
