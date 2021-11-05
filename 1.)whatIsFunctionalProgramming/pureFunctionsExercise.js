// Which ones are pure, which are not? 

// 1.)
function getDate() {
  return new Date().toDateString();
}
// Impure: accepts data from the outside world (Date())

// 2.) 
function getWorkshopDate () {
  return new Date(2020, 11, 4).toDateString();
}
// Pure: we're passing in an arguments to Date and received the returned output. Always going to get the same return value here. 
// Deterministic, we always get the same result. 

// 3.)
function toHex(n) {
  let hex = n.toString(16);
  return hex.padStart(2, '0');
}
// Pure: we're receiving an input and returning an output. Only depends on it's input argument. 

// 4.) 
function rgbToHex(R, G, B) {
  return '#' + [toHex(R), toHex(G), toHex(B)].join('');
}
// Pure: again we're receiving arguments and returning the output 

// 5.)
function setColor(R, G, B) {
  const hex = rgbToHex(R, G, B);
  const colorMe = document.getElementById('color-me');
  colorMe.setAttribute('style', 'color: ' + hex);
}
// Impure: we're changing something outside of the function and accessing the DOM by setting the colour of an element.
// Also not returning anything 

// 6.) 
async function readJsonFile(filename) {
  const file = await fetch(
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'
  );
  return await file.json();
}
// Impure: we're relying on data from the outside (fetch)
// The data from the outside could change, or the url could become unavailable 

// 7.) 
function writeJsonString(object) {
  return JSON.stringify(object, null, 2);
}
// Pure: accepts an input and returns an output 
// However, the object could still change as it's mutable 

// 8.) 
function exclusiveOr(A, B) {
  return (A || B) && !(A && B);
}
// Pure: accepts an input and returns an output

// 9.)
function computeTruthTable(operator) {
  const truthValues = [true, false];
  const table = [];
  for (const A of truthValues) {
    for (const B of truthValues) {
      const value = operator(A, B);
      table.push({ A, B, value });
    }
  }
  return table;
}
// Pure: but very imperative, we are changing the table array - not very functional. But because it's happening within the 
// function it's pure 

// 10.)
function showTruthTable(operator) {
  console.table(computeTruthTable(operator));
}
// Impure: logging! 