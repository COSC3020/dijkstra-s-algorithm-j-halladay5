const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var test1 = [
       [ 0,2,0,0,0,0,0,3,0,0,0 ],      //0
       [ 2,0,2,8,3,0,0,0,0,0,0 ],      //1
       [ 0,2,0,0,0,6,0,0,0,0,0 ],      //2
       [ 0,8,0,0,0,1,0,0,0,0,0 ],      //3
       [ 0,3,0,0,0,3,0,0,0,0,1 ],      //4
       [ 0,0,6,1,3,0,0,0,0,0,0 ],      //5
       [ 0,0,0,0,0,0,0,0,1,0,0 ],      //6
       [ 3,0,0,0,0,0,0,0,4,10,0],      //7
       [ 0,0,0,0,0,0,1,4,0,5,0 ],      //8
       [ 0,0,0,0,0,0,0,10,5,0,7],      //9
       [ 0,0,0,0,1,0,0,0,0,7,0 ]       //10
        ];

assert(JSON.stringify(dijkstras(test1, 0)) == JSON.stringify([0,2,4,9,5,8,8,3,7,12,6]));
assert(JSON.stringify(dijkstras(test1, 4)) == JSON.stringify([5,3,5,4,0,3,13,8,12,8,1]));

var test2 = [
    [0,1,1,0,0],
    [0,0,0,1,0],
    [0,0,0,2,3],
    [0,0,0,0,0],
    [0,0,3,0,0]
    ];

assert(JSON.stringify(dijkstras(test2, 0)) == JSON.stringify([0,1,1,2,4]));
assert(JSON.stringify(dijkstras(test2, 3)) == JSON.stringify([Infinity, Infinity, Infinity, 0, Infinity]));

var test3 = [[0]];

assert(JSON.stringify(dijkstras(test3, 0)) == JSON.stringify(0));
