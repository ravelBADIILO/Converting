function convertTemperature() {
  const temperature = parseFloat(document.getElementById('temperature').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  let convertedTemperature;

  if (fromUnit === 'C' && toUnit === 'F') {
    convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit conversion
  } else if (fromUnit === 'F' && toUnit === 'C') {
    convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius conversion
  } else {
    convertedTemperature = temperature; // If units are the same, no conversion needed
  }

  document.getElementById('convertedTemperature').textContent = convertedTemperature.toFixed(2);
}
