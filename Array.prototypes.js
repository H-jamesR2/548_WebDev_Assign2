// RUN Test Program with Node.js

/* forEach */
/** 
 * forEach() calls a provided callbackFn function once 
 * for each element in an array in ascending index order. 
 * It is not invoked for index properties that have been deleted 
 * or are uninitialized. 
 * callbackFn is invoked with three arguments:
 * { the value of the element, the index of the element, the Array object being traversed }
**/
Array.prototype.forEach_ = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined) {
            continue;
        }
        callback(this[i], i, this);
    }
};
// Test for forEach 
/*
 let array1 = [1,2,3,4,5];
 console.log("forEach_:");
 array1.forEach_((element, i) => console.log(element, i));
 console.log("forEach (expected):");
 array1.forEach((element, i) => console.log(element, i));
*/

/* Map */

// Filter

// Some

// Every

// Reduce

// Includes

// indexOf

// Push

// lastIndexOf

// Object.keys()

// Object.values()
