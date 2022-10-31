function dummy () {
  return 1;
}
/**
 * Reverse an array
 * 
 * @example
 * 
 * reverse([1,2,3]) returns [3,2,1]
 * 
 * @param {array} array
 * @returns {array}
 */
function reverse (array) {
  return array.slice().reverse();
}

/**
 * Reverse a string
 * 
 * @example
 * 
 * stringReverse('hello') returns 'olleh'
 * 
 * @param {string} text
 * @returns {string}
 * 
 */
function stringReverse (text) {
  return text.split('').reverse().join('');
}


/**
 * return a fixed length fibonacci list
 * 
 * @example
 * 
 * fibonacci(5) returns [1,1,2,3,5]
 * 
 * @param {number} length
 * @returns {array}
 */
function fibonacci (length) {
  if (length == 0) return [];
  if (length == 1) return [1];
  if (length == 2) return [1, 1];

  const fibo = fibonacci(length - 1);
  return [...fibo, fibo[length - 2] + fibo[length - 3]];
}

/**
 * Given an array of integers nums and an integer target,
 * return arraries of the two numbers such that they add up to target.
 * 
 * @example
 * 
 * twoSum([1,3,5,7,9], 8) returns [[1, 7], [3, 5]]
 * 
 * @param {number[]} testArray
 * @param {number} target
 * @returns {number[]}
 */
function twoSum (testArray, target) {
  const result = [];

  let i = testArray.length;
  while (i--) {
    const diff = target - testArray[i];
    
    if (testArray.includes(diff) && i !== testArray.indexOf(diff)) {
      result.push([testArray[i], diff])
      testArray.splice(i, 1);
      testArray.splice(testArray.indexOf(diff), 1);
    }
  }

  return result;
}

/**
 * Creates an array of numbers progressing from 
 * start up to, but not including, end
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * range(0,4) returns [0,1,2,3]
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns {array}
 */
function range (start, end) {
  const result = [];

  for (let i = start; i < end; i++) {
    result.push(i)
  }
  return result;
}

/**
 * Recursively flattens array.
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * flatten([1,[2,[3,4],[5,[6]]]]) returns [1,2,3,4,5,6]
 * 
 * @param {array} array
 * @returns {array}
 */
function flatten (array) {
  const result = [];
  array.forEach(item => {
    if(Array.isArray(item)) {
      const flat = flatten(item);
      result.push(...flat);
    } else {
      result.push(item);
    }
  });

  return result;
}

module.exports = {
  dummy,
  fibonacci,
  reverse,
  flatten,
  twoSum,
  flatten,
  stringReverse,
  range
};
