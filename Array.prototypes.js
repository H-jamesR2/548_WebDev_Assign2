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

/* Filter */
/**
 * filter() calls a provided callbackFn function 
 * once for each element in an array, and constructs 
 * a new array of all the values for which 
 * allbackFn returns a value that coerces to true. 
 * callbackFn is invoked only for indexes of the array which have assigned values; 
 * it is not invoked for indexes which have been deleted or 
 * which have never been assigned values. 
 * Array elements which do not pass the callbackFn test are skipped, 
 * and are not included in the new array.
 * 
 * callbackFn is invoked with three arguments:
 * { the value of the element, the index of the element, the Array object being traversed }
 */
Array.prototype.filter_ = function(callback) {
    let filtered = []
    for (let i = 0; i < this.length; ++i) {
        if (!(i in this)) {
            continue
        }
        else if (callback(this[i], i, this)) {
            filtered.push(this[i])
        }
    }
    return filtered
}
// Test for Filter
/*
 const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
 const nums = [1,2,3,4,0, undefined]
 console.log("filter_", words.filter_(word => word.length > 6))
 console.log("filter (expected):", words.filter(word => word.length > 6))
 console.log("filter_:", nums.filter_(num => num < 4))
 console.log("filter (expected):", nums.filter(num => num < 4))
*/

/* Some */
/**
 * some() executes the callbackFn function once for each element 
 * present in the array until it finds the one where 
 * callbackFn returns a truthy value (a value that becomes true when converted to a Boolean). 
 * If such an element is found, some() immediately returns true. 
 * Otherwise, some() returns false. 
 * callbackFn is invoked only for indexes of the array with assigned values. 
 * It is not invoked for indexes which have been deleted 
 * or which have never been assigned values.
 * 
 * callbackFn is invoked with three arguments: 
 * { the value of the element, the index of the element, and the Array object being traversed }
 */
Array.prototype.some_ = function(callback) {
    for (let i = 0; i < this.length; ++i) {
        if (callback(this[i], i, this)) {
            return true
        }
    }
    return false
}
// Test for some
/*
 const someArray1 = [12, 5, 8, 3, 4]
 console.log("some_:", someArray1.some_(element => element > 10))           //check if contains at least 1 value greater than 10
 console.log("some (expected):", someArray1.some(element => element > 10))
 console.log("some_:", someArray1.some_(element => element < 2))            //check if contains at least 1 value less than 2
 console.log("some (expected):", someArray1.some(element => element < 2))
*/

/* Every */
/**
 * The every method executes the provided callbackFn function once 
 * for each element present in the array until it finds the one 
 * where callbackFn returns a falsy value. 
 * If such an element is found, the every method immediately returns false. 
 * Otherwise, if callbackFn returns a truthy value for all elements, every returns true.
 * 
 * callbackFn is invoked with three arguments: 
 * { the value of the element, the index of the element, and the Array object being traversed }
 */
Array.prototype.every_ = function(callback) {
    for (let i = 0; i < this.length; ++i) {
        //if at least 1 value in array does not match condition, return false;
        if(!(callback(this[i], i, this))) { 
            return false
        }
    }
    return true
}
// Test for every
/*
 const everyArray1 = [12, 54, 18, 130, 44]
 console.log("every_:", everyArray1.every_(element => element > 11))            //check if contains every value greater than 11
 console.log("every (expected):", everyArray1.every(element => element > 11))
 console.log("every_:", everyArray1.every_(element => element > 13))            //check if contains every value greater than 13
 console.log("every (expected):", everyArray1.every(element => element > 13))
*/

/* Reduce */
/**
 * callbackfn should be a function that takes four arguments.
 * reduce calls the callback, as a function, once for each element 
 * after the first element present in the array, in ascending order.
 * 
 * callbackfn is called with four arguments:
 * { the previousValue (value from the previous call to callbackfn), the currentValue (value of the current element), 
 * the currentIndex, and the object being traversed }
 * 
 * The first time that callback is called, the previousValue and currentValue can be one of two values:
 * -- If an initialValue was supplied in the call to reduce, then previousValue will be equal to 
 * initialValue and currentValue will be equal to the first value in the array.
 * -- If no initialValue was supplied, then previousValue will be equal to 
 * the first value in the array and currentValue will be equal to the second.
 * 
 * It is a TypeError if the array contains no elements and initialValue is not provided. <-- Base
 */
Array.prototype.reduce_ = function(callback, initialValue) {
    // TypeError
    if (this.length == 0 && initialValue == undefined) {
        throw new Error(TypeError)
    }
    // Edge cases
    else if (this.length == 1 && initialValue == undefined) {
        return this[0]
    }
    else if (this.length == 0 && initialValue) {
        return initialValue
    }

    // Most cases
    let reducer = initialValue || this[0]
    for (let i = (initialValue ? 0 : 1); i < this.length; ++i) {
        if(!(i in this)) {
            continue
        }
        temp = callback(reducer, this[i], i, this)
        reducer = temp
    }
    return reducer
}
// Test for reduce
/*
 const getMax = (a,b) => Math.max(a,b);
 console.log("reduce_:", [1, 100].reduce_(getMax, 50))          // 100
 console.log("reduce (expected):", [1, 100].reduce(getMax, 50))

 // callback is invoked once for element at index 1
 console.log("reduce_:", [1, 100].reduce_(getMax))              // 100
 console.log("reduce (expected):", [1, 100].reduce(getMax))

 // callback is not invoked
 console.log("reduce_:", [    50].reduce(getMax))               // 50
 console.log("reduce (expected):", [    50].reduce(getMax))
 console.log("reduce_:", [      ].reduce(getMax, 1))            // 1
 console.log("reduce (expected):", [      ].reduce(getMax, 1))

 console.log("reduce_:", [      ].reduce(getMax))               // TypeError
 console.log("reduce (expected):", [      ].reduce(getMax))
*/

/* Includes */
/**
 * The includes() method determines whether an array includes a certain value 
 * among its entries, returning true or false as appropriate.
 */
Array.prototype.includes_ = function(searchElement, startIndex) {
    let start = 0;
    if (startIndex >= this.length) {
        return false
    } 
    else if (startIndex < 0) {
        adjust_pos = this.length + startIndex
        if (adjust_pos > 0) {
            start = adjust_pos
        }
    } else {
        start = startIndex
    }

    for(let i = start; i < this.length; ++i) {
        if (this[i] == searchElement || 
            (Number.isNaN(this[i]) && Number.isNaN(searchElement))) {
            return true
        }
    }
    return false
}
// Test for includes
/*
 console.log("includes_:", [1, 2, 3].includes_(2))           // true
 console.log("includes: (expected)", [1, 2, 3].includes(2))         
 console.log("includes_:", [1, 2, 3].includes_(4))          // false
 console.log("includes: (expected)", [1, 2, 3].includes(4))
 console.log("includes_:", [1, 2, 3].includes_(3, 3))       // false
 console.log("includes: (expected)", [1, 2, 3].includes(3, 3))
 console.log("includes_:", [1, 2, 3].includes_(3, -1))      // true
 console.log("includes: (expected)", [1, 2, 3].includes(3, -1))
 console.log("")
 console.log("includes_:", [1, 2, NaN].includes_(NaN))      // true
 console.log("includes: (expected)", [1, 2, NaN].includes(NaN))
 console.log("includes_:", ["1", "2", "3"].includes_(3))    // false
 console.log("includes: (expected)", ["1", "2", "3"].includes(3))
*/

// indexOf

// Push

// lastIndexOf

// Object.keys()

// Object.values()
