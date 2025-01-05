// Write your solution here!
// Declare the 'cats' array in the global scope
const cats = ["Milo", "Otis", "Garfield"];

// Destructive functions

// Appends a cat to the end of the 'cats' array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Prepends a cat to the beginning of the 'cats' array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Removes the last cat from the 'cats' array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Removes the first cat from the 'cats' array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructive functions

// Appends a cat to the end of a new array and returns it
function appendCat(name) {
  return [...cats, name];
}

// Prepends a cat to the beginning of a new array and returns it
function prependCat(name) {
  return [name, ...cats];
}

// Removes the last cat in a new array and returns it
function removeLastCat() {
  return cats.slice(0, -1);
}

// Removes the first cat in a new array and returns it
function removeFirstCat() {
  return cats.slice(1);
}

// Export functions for testing purposes
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};

// Export functions for testing purposes
module.exports = {
  appendCat,
  removeLastCat,
  prependCat,
  removeFirstCat,
  getCats
};
