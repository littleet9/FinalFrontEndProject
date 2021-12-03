<template>
    <div
        @click="$emit('toggle-show-info', location.id)" 
        :class="[location.showLocationInfo ? 'showingInfo' : '', 'location']"
    >
      <!-- Town/City, State, and Delete Button -->
      <h3 >
          <span> 
            {{ location.town }}
            <span class="sideText"> {{ location.state }} </span>
          </span>
          <i v-show="!location.currentLocation" @click="$emit('delete-location', location.id)" class="fas fa-times"></i>
      </h3>

      <!-- Current Temp and matching Icon -->
      <h4 class="simpleInfo"> {{ location.temp }}° <i :class="this.location.icon"></i> </h4>

      <!-- Extra Information (hidden) -->
      <div class="extraInfo" v-show="location.showLocationInfo">
        <p class="weather">
          {{location.weatherMain}}
          <span class="sideText"> {{location.weatherDesc}} </span>
        </p>
        <p class="temp">
          <span class="tempatures"> Temp: {{location.temp}}° </span>
          <span class="tempatures"> High: {{location.tempHigh}}° </span>
          <span class="tempatures"> Low: {{location.tempLow}}° </span>
        </p>
        <p class="otherInfo">
          <span> Feels Like: {{location.feelsLike}}° </span>
          <span> Wind Speed: {{location.windSpeed}}mph </span>
        </p>
      </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Location",
    props: {
        location: Object,
    },
    methods: {
      //Gets weather data from Open Weather API from city/town and state
      async fetchAPIData() {
        if(this.location.currentLocation) {
          console.log("CurrentLocation is being gathered...");
          await this.getCurrentLocation();  
        }
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.location.town + ", " + this.location.state + ',US&units=imperial&appid=21604689a455b4316d9f4a1e63ae8002')
        .then(response => {
          console.log("Fetching OpenWeather Data for " + this.location.town + ", " + this.location.state);
          //asign the values from json to the locatio object
          this.location.weatherMain = response.data.weather[0].main;
          this.location.weatherDesc = response.data.weather[0].description;
          this.location.temp = Math.round(response.data.main.temp);
          this.location.tempHigh = Math.round(response.data.main.temp_max);
          this.location.tempLow = Math.round(response.data.main.temp_min);
          this.location.feelsLike = Math.round(response.data.main.feels_like);
          this.location.windSpeed = response.data.wind.speed;
          const icon = response.data.weather[0].icon;
          if(icon.charAt(2) === 'd') {
            this.location.icon = "wi wi-owm-day-" + response.data.weather[0].id;
          } else {
            this.location.icon = "wi wi-owm-night-" + response.data.weather[0].id;
          }
        })
      },
      //Gets our current location based off our IP address using the IP Geolcation API
      async getCurrentLocation() {
        await axios.get('http://ip-api.com/json/')
        .then(response => {
          //asign the values from json to the location object
          this.location.town = response.data.city;
          this.location.state = response.data.region;
          console.log("Your current location is: " + this.location.town + ", " + this.location.state);
        })
      },
    },
    created() {
      this.fetchAPIData();
    },
    emits: ['delete-location', 'toggle-show-info'],
}
</script>

<style scope>
.fas {
  color: lightgray;
}
.location {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-top: 5px solid white;
}
.location.showingInfo {
  border-top: 5px solid rgb(81, 81, 255);;
}
.location h3, h6{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.extraInfo {
  background-color: rgba(176, 196, 222, 0.308);
  padding: 5px;
}
.simpleInfo {
  color: rgb(81, 81, 255);
}
.sideText {
  font-size: 12px;
}
.temp, .otherInfo {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>