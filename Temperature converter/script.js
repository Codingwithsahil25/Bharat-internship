function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const fromUnitSelector = document.getElementById("fromUnitSelector");
    const toUnitSelector = document.getElementById("toUnitSelector");
    const fromUnit = fromUnitSelector.options[fromUnitSelector.selectedIndex].value;
    const toUnit = toUnitSelector.options[toUnitSelector.selectedIndex].value;
    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperatureInput * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperatureInput - 32) * 5/9;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = temperatureInput + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = temperatureInput - 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = ((temperatureInput - 32) * 5/9) + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = ((temperatureInput - 273.15) * 9/5) + 32;
    } else {
        result = temperatureInput; // Same unit conversion
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${toUnit.toUpperCase()}`;
}
