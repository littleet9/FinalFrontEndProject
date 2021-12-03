<template>
    <!-- Open Weather API -->
    <h4> Open Weather API </h4>
    <ul class="linkedList">
        <li><a href="https://openweathermap.org/api"> Open Weather </a></li>
        <li><a href="https://openweathermap.org/current" > API Documentation </a></li>
    </ul>
    <img src="../assets/OpenWeather.jpg" alt="OpenWeather Api" >
    <!-- IP Geolocation API -->
    <h4> IP Geolocation API </h4>
    <ul class="linkedList">
        <li><a href="https://ipgeolocation.io/ip-location-api.html"> IP Geoocation </a></li>
        <li><a href="https://ipgeolocation.io/documentation/ip-geolocation-api.html" > API Documentation </a></li>
    </ul>
    <img src="../assets/IPAPI.jpg" alt="IP Geolocation Api" >
    <!-- Weather Icons -->
    <h4> Weather Icons CSS and Images</h4>
    <ul class="linkedList">
        <li><a href="https://erikflowers.github.io/weather-icons/"> 222 Weather Icons </a></li>
    </ul>
    <img src="../assets/WeatherIcons.jpg" alt="Weather Icons" >

    <!-- Go Back Link -->
    <div class="routerLink">
        <router-link to="/"> Go Back </router-link>
    </div>
</template>

<style scoped>
.linkedList {
    margin-left: 25px;
    font-size: 14px;
    color: lightgrey;
}
h2{
    margin-bottom: 50px;
}
img {
    max-width: 550px;
    margin: 30px auto;
}
</style>

