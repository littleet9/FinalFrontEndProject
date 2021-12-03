<template>
    <!-- Current Location -->
    <div class="currentLocationDiv">
      <h5> Current Location </h5>
      <Location @toggle-show-info="toggleShowCurrentLocationInfo" :location="currentLocation"/>
    </div>

    <!-- Location List -->
    <ListBody />

    <!-- About Link -->
    <div class="routerLink">
      <router-link to="/about">About</router-link>  
    </div>
</template>

<script>
import Location from '../components/Location.vue'
import ListBody from '../components/ListBody.vue'

export default {
  name: 'Home',
  components: {
    Location,
    ListBody,
  },
  methods: {
    //Sets boolean that shows extra weather information for the currently location
    toggleShowCurrentLocationInfo(id) {
      this.currentLocation.showLocationInfo = !this.currentLocation.showLocationInfo;
    },
  },
  data() {
    return {
      currentLocation: {},
    }
  },
  created() {
    this.currentLocation = {
      showLocationInfo: true,
      currentLocation: true,
    }
  }
}
</script>

<style scoped>
.currentLocationDiv {
  margin-bottom: 30px;
}
</style>
