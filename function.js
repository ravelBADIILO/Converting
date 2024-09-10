function convertTemperature() {
  const temperature = parseFloat(document.getElementById('temperature').value);
  let convertedTemperature;

  // Always converting from Celsius to Fahrenheit
  convertedTemperature = (temperature * 9/5) + 32;

  document.getElementById('convertedTemperature').value = convertedTemperature.toFixed(2);
}

function resetTemperature() {
  document.getElementById('temperature').value = "";
  document.getElementById('convertedTemperature').value = "";
}
