function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");
  
    let celsiusValue = parseFloat(celsiusInput.value);
    let fahrenheitValue = parseFloat(fahrenheitInput.value);
    let kelvinValue = parseFloat(kelvinInput.value);
  
    // Convert Celsius to Fahrenheit and Kelvin
    if (!isNaN(celsiusValue)) {
      fahrenheitValue = (celsiusValue * 9/5) + 32;
      kelvinValue = celsiusValue + 273.15;
    }
  
    // Convert Fahrenheit to Celsius and Kelvin
    if (!isNaN(fahrenheitValue)) {
      celsiusValue = (fahrenheitValue - 32) * 5/9;
      kelvinValue = (fahrenheitValue + 459.67) * 5/9;
    }
  
    // Convert Kelvin to Celsius and Fahrenheit
    if (!isNaN(kelvinValue)) {
      celsiusValue = kelvinValue - 273.15;
      fahrenheitValue = (kelvinValue * 9/5) - 459.67;
    }
  
    // Update input fields with the converted values
    celsiusInput.value = isNaN(celsiusValue) ? "" : celsiusValue.toFixed(2);
    fahrenheitInput.value = isNaN(fahrenheitValue) ? "" : fahrenheitValue.toFixed(2);
    kelvinInput.value = isNaN(kelvinValue) ? "" : kelvinValue.toFixed(2);
  }
  
  // Attach the event listener to the inputs
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const kelvinInput = document.getElementById("kelvin");
  
  celsiusInput.addEventListener("input", convertTemperature);
  fahrenheitInput.addEventListener("input", convertTemperature);
  kelvinInput.addEventListener("input", convertTemperature);
  