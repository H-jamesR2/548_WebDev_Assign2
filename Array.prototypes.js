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
    let start = 0
    if (startIndex) {
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
 console.log("includes: (expected):", [1, 2, 3].includes(2))         
 console.log("includes_:", [1, 2, 3].includes_(4))          // false
 console.log("includes: (expected):", [1, 2, 3].includes(4))
 console.log("includes_:", [1, 2, 3].includes_(3, 3))       // false
 console.log("includes: (expected):", [1, 2, 3].includes(3, 3))
 console.log("includes_:", [1, 2, 3].includes_(3, -1))      // true
 console.log("includes: (expected):", [1, 2, 3].includes(3, -1))
 console.log("")
 console.log("includes_:", [1, 2, NaN].includes_(NaN))      // true
 console.log("includes: (expected):", [1, 2, NaN].includes(NaN))
 console.log("includes_:", ["1", "2", "3"].includes_(3))    // false
 console.log("includes: (expected):", ["1", "2", "3"].includes(3))
*/

/* indexOf */
/**
 * indexOf() compares searchElement to elements of the Array using strict equality 
 * (the same method used by the === or triple-equals operator).
 */
Array.prototype.indexOf_ = function (searchElement, startIndex) {
    let start = 0
    if (startIndex) {
        if (startIndex >= this.length) {
            return -1
        }
        else if (startIndex < 0) {
            adjust_pos = this.length + startIndex
            if (adjust_pos > 0) {
                start = adjust_pos
            }
        } else {
            start = startIndex
        }
    }
    for (let i = start; i < this.length; ++i) {
        if (this[i] === searchElement) {
            return i
        }
    }
    return -1
}
// Test for indexOf
/*
 const indexOfarray1 = [2, 9, 9]
 console.log("indexOf_:", indexOfarray1.indexOf_(2))                 // 0
 console.log("indexOf (expected):", indexOfarray1.indexOf(2))    
 console.log("indexOf_:", indexOfarray1.indexOf_(7))                 // -1
 console.log("indexOf (expected):", indexOfarray1.indexOf(7))
 
 console.log("indexOf_:", indexOfarray1.indexOf_(9, 2))              // 2
 console.log("indexOf (expected):", indexOfarray1.indexOf(9, 2))
 console.log("indexOf_:", indexOfarray1.indexOf_(2, -1))             // -1
 console.log("indexOf (expected):", indexOfarray1.indexOf(2, -1))
 console.log("indexOf_:", indexOfarray1.indexOf_(2, -3))             // 0
 console.log("indexOf (expected):", indexOfarray1.indexOf(2, -3))
*/

/* Push */
/**
 * The push method appends values to an array; push is intentionally generic. 
 * This method can be used with call() or apply() on objects resembling arrays. 
 * The push method relies on a length property to determine where to start inserting the given values. 
 * If the length property cannot be converted into a number, the index used is 0. 
 * This includes the possibility of length being nonexistent, in which case length will also be created.
 * 
 * Although strings are native, Array-like objects, 
 * they are not suitable in applications of this method, as strings are immutable.  
 * Similarly for the native, Array-like object arguments.
 */
Array.prototype.push_ = function(...elementN) {
    let elementIndex = 0
    const length = this.length
    for (let i = length; i < length + elementN.length; ++i) {
        this[i] = elementN[elementIndex]
        ++elementIndex
    }
    return this.length
}
// Test for Push
/* 
 const pushArray1 = ['pigs', 'goats', 'sheep']
 const pushArray2 = ['pigs', 'goats', 'sheep']
 const push_count1 = pushArray1.push_('cows')
 const push_count2 = pushArray2.push('cows')
 console.log(push_count1, " | ", push_count2) // expected output: 4 | 4
 // expected output: Arrays ["pigs", "goats", "sheep", "cows"] | ["pigs", "goats", "sheep", "cows"]
 console.log(pushArray1, " | ", pushArray2)

 pushArray1.push_('chickens', 'cats', 'dogs')
 pushArray2.push('chickens', 'cats', 'dogs')
 // expected output: Arrays ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"] | 
 // ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
 console.log(pushArray1, " | ", pushArray2)
*/

/* lastIndexOf */
/**
 * lastIndexOf compares searchElement to elements of the Array using strict equality 
 * (the same method used by the ===, or triple-equals, operator).
 * 
 * searchElement => Element to locate in the array.
 * fromIndex (Optional) => The index at which to start searching backwards. 
 * Defaults to the array's length minus one (arr.length - 1), 
 * i.e. the whole array will be searched. 
 * If the index is greater than or equal to the length of the array, 
 * the whole array will be searched. 
 * If negative, it is taken as the offset from the end of the array. 
 * Note that even when the index is negative, the array is still searched from back to front. 
 * If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.
 */
Array.prototype.lastIndexOf_ = function(searchElement, startIndex) {
    let start = this.length - 1
    if (startIndex) {
        if (startIndex < this.length) {
            start = startIndex
        } else if (startIndex < 0) {
            adjust_pos = this.length + startIndex
            if (adjust_pos < 0) {
                return -1
            }
        }
    }

    for (let i = start; i >= 0; --i) {
        if (this[i] == searchElement) {
            return i
        }
    }
    return -1
}
// Test for lastIndexOf
/* 
 const lastIndexOfarray1 = [2, 5, 9, 2];
 console.log("lastIndexOf_:", lastIndexOfarray1.lastIndexOf_(2))                // 3
 console.log("lastIndexOf (expected):", lastIndexOfarray1.lastIndexOf(2))
 console.log("lastIndexOf_:", lastIndexOfarray1.lastIndexOf_(7))                // -1
 console.log("lastIndexOf (expected):", lastIndexOfarray1.lastIndexOf(7))
 console.log("lastIndexOf_:", lastIndexOfarray1.lastIndexOf_(2, 3))             // 3
 console.log("lastIndexOf (expected):", lastIndexOfarray1.lastIndexOf(2, 3))
 console.log("")
 console.log("lastIndexOf_:", lastIndexOfarray1.lastIndexOf_(2, 2))             // 0
 console.log("lastIndexOf (expected):", lastIndexOfarray1.lastIndexOf(2, 2))
 console.log("lastIndexOf_:", lastIndexOfarray1.lastIndexOf_(2, -2))            // 0
 console.log("lastIndexOf (expected):", lastIndexOfarray1.lastIndexOf(2, -2))
 console.log("lastIndexOf_:", lastIndexOfarray1.lastIndexOf_(2, -1))            // 3
 console.log("lastIndexOf (expected):", lastIndexOfarray1.lastIndexOf(2, -1)) 
*/

/* Object.keys() */
/**
 * The Object.keys() method returns an array of a given object's own enumerable property names, 
 * iterated in the same order that a normal loop would.
 */
Object.keys_ = function(obj) {
    let keys = []
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key)
        }
    }
    return keys
}
// Test for Object.keys
/*
 const object1 = {
     a: 'somestring',
     b: 42,
     c: false
 };
 console.log(Object.keys(object1)); // expected output: Array ["a", "b", "c"]
 console.log(Object.keys_(object1));
 // simple array
 const arr = ['a', 'b', 'c'];
 console.log(Object.keys(arr));     // console: ['0', '1', '2']
 console.log(Object.keys_(arr));

 console.log("")
 // array-like object
 const obj = { 0: 'a', 1: 'b', 2: 'c' };
 console.log(Object.keys(obj));     // console: ['0', '1', '2']
 console.log(Object.keys_(obj));
 // array-like object with random key ordering
 const anObj = { 100: 'a', 2: 'b', 7: 'c' };
 console.log(Object.keys(anObj));   // console: ['2', '7', '100']
 console.log(Object.keys_(anObj));
 console.log(Object.keys({}));      // []
 console.log(Object.keys_({})); 
*/
 
/* Object.values() */
/**
 * Object.values() returns an array whose elements are the enumerable property values found on the object. 
 * The ordering of the properties is the same as that given 
 * by looping over the property values of the object manually.
 */
Object.values_ = function(obj) {
    let values = []
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            values.push(obj[key])
        }
    }
    return values
}
// Test for Object.values()
/*
 const object1 = {
     a: 'somestring',
     b: 42,
     c: false
 };
 console.log(Object.values(object1)); // expected output: Array ['somestring', 42, false]
 console.log(Object.values_(object1));
 // simple array
 const arr = ['a', 'b', 'c'];
 console.log(Object.values(arr));     // console: ['a', 'b', 'c']
 console.log(Object.values_(arr));

 console.log("")
 // array-like object
 const obj = { 0: 'a', 1: 'b', 2: 'c' };
 console.log(Object.values(obj));     // console: ['a', 'b', 'c']
 console.log(Object.values_(obj));
 // array-like object with random key ordering
 const anObj = { 100: 'a', 2: 'b', 7: 'c' };
 console.log(Object.values(anObj));   // console: ['b', 'c', 'a']
 console.log(Object.values_(anObj));
 console.log(Object.values({}));      // []
 console.log(Object.values_({}));
*/
