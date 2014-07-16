var Room = require('./room.js');
var House = require('./house.js');


var r1 = new Room('living', 10, 12, 8, 'carpet', 'aqua');
var r2 = new Room('dining', 8, 10, 7, 'tile', 'green');
var r3 = new Room('bedroom', 9, 11, 9, 'wood', 'orange');

//console.log(r1, r2, r3);

var h1 = new House('M-4', 'brick', 1993);
//var h2 = new House('M-5', 'stone', 1785);
//var h3 = new House('M-6', 'straw', 1832);

h1.rooms.push(r1, r2, r3);

//console.log(h1, h2, h3);

//console.log('the area inside of room 1 is:', r1.area());

var totalArea = 0;

for(var i=0; i<h1.rooms.length; i++)
{
  totalArea += h1.rooms[i].area();
}

//console.log('total area of all rooms in h1 is:', totalArea);

//console.log(h1.area());

console.log(h1.rooms[0].cost());
console.log(h1.rooms[1].cost());
console.log(h1.rooms[2].cost());
console.log(h1.cost());



