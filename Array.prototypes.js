// RUN Test Program with Node.js
// git push--set - upstream origin branch 

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
    for (let i = 0; i < this.length; ++i) {
        if (this[i] == undefined) {
            continue
        }
        callback(this[i], i, this)
    }
}
// Test for forEach 
/*
 let array1 = [1,2,3,4,5]
 console.log("forEach_:")
 array1.forEach_((element, i) => console.log(element, i))
 console.log("forEach (expected):")
 array1.forEach((element, i) => console.log(element, i))
*/

/* Map */
/**
 * map calls a provided callbackFn function once 
 * for each element in an array, in order, and 
 * constructs a new array from the results. 
 * callbackFn is invoked only for indexes of the array 
 * which have assigned values (including undefined).
 * 
 * The callbackFn function accepts the following arguments:
 * element => The current element being processed in the array.
 * indexOptional => The index of the current element being processed in the array.
 * arrayOptional => The array map was called upon.
 * thisArgOptional => Value to use as this when executing callbackFn.
**/
Array.prototype.map_ = function(callback) {
    let map = []
    for (let i = 0; i < this.length; ++i) {
        if (!(i in this)) {
            continue
        }
        map[i] = callback(this[i], i, this)
    }
    return map
}
// Test for Map
/*
 const mapArray1 = [6,7,8,9]
 console.log("map_:", mapArray1.map_(element => element + 3))
 console.log("map (expected):", mapArray1.map(element => element + 3))
*/

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
