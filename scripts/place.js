document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

const temp = parseFloat(document.getElementById("temp").textContent);  // 28°C
const wind = parseFloat(document.getElementById("wind").textContent);  // 12 km/h

function calculateWindChill(t, s) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(s, 0.16) +
        0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1);
}

let windChillValue = "N/A";

if (temp <= 10 && wind > 4.8) {
    windChillValue = calculateWindChill(temp, wind) + " °C";
}

document.getElementById("windchill").textContent = windChillValue;
