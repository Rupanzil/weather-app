const url = `https://api.weatherapi.com/v1/current.json?key=580bd73d2a09472ebd880305241201&q=London&aqi=no`;
const apiKey = "b83529abbf01d7556d124a93776c21e2";
let cityName = "Delhi"
let geoCodeUrl;

/* async function getLatLong(cityName) {
    console.log(`GeoCode url is https://api.weatherapi.com/v1/current.json?key=580bd73d2a09472ebd880305241201&q=${cityName}&aqi=no`);
    const locationResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=580bd73d2a09472ebd880305241201&q=${cityName}&aqi=no`);
    console.log(locationResponse);
    const locationData = await locationResponse.json();
    console.log(locationData[0]);
    const latLong = [locationData[0].lat, locationData[0].lon]
    console.log(latLong);
    const lat = latLong[0];
    const long = latLong[1];
    console.log("Lat ", lat, " Long ", long );
    getWeather(lat, long)
} */
function showData(weatherObj) {
    const currentWeather = weatherObj.current;
    const locationObj = weatherObj.location;
    const currentTemp = Math.round(currentWeather.temp_c);
    const icon_src = currentWeather.condition.icon;
    const weatherCondition = currentWeather.condition.text;
    const location = locationObj.name + ", " + locationObj.region + ", " + locationObj.country;

    // updating the temperature here
    document.querySelector(".temperature").innerHTML = `<h2 class="display-1">${currentTemp}°C</h2>
    <h3>${location}</h3>
    <img src=${icon_src} height=50px>
    <p><span class="heading-6">${weatherCondition}</span></p>`
}


async function getWeather(cityName) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=580bd73d2a09472ebd880305241201&q=${cityName}&aqi=no`);
    const responseData = await response.json();
    console.log(responseData);
    showData(responseData);
}
getWeather("Kolkata")

document.querySelector("#submit").addEventListener("click", () => {
    cityName = document.querySelector("#cityName").value;
    console.log(cityName);
    // let latlong = getLatLong(cityName);
    getWeather(cityName)
    // console.log(latlong);
})
