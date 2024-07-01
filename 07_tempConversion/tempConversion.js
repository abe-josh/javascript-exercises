const convertToCelsius = function() {
  let fahrenheit = arguments[0];

  let result = (fahrenheit - 32) * (5/9);

  let celcius = Number(result.toFixed(1));

  console.log("Result : " , result);
  console.log("Celcius : " , celcius);

  return celcius;


};

const convertToFahrenheit = function() {

  let celcius = arguments[0];

  let result = celcius * (9/5) + 32;

  let fahrenheit = Number(result.toFixed(1));

  console.log("Result : " , result);
  console.log("Fahrenheit : " , fahrenheit);

  return fahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
