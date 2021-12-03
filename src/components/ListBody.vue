<template>
    <div class="locationListDiv">

      <h5> 
        Location List 
        <!-- Add Location Button -->
        <Button @button-click="toggleAddLocation" :text="showAddLocation ? 'Close' : 'Add Location'" :color="showAddLocation ? 'red' : 'green'" />    
      </h5>

      <!-- Add Location (Hidden) -->
      <div v-show="showAddLocation">
        <AddLocation @add-location="addLocation" />
      </div>

      <!-- Location List -->
      <LocationList @toggle-show-list-info="toggleShowLocationInfo" @delete-location="deleteLocation" :locationList="locationList" />
    
    </div>
</template>

<script>
    import Location from './Location.vue'
    import LocationList from './LocationList.vue'
    import AddLocation from './AddLocation.vue'
    import Button from './Button.vue'

  export default {
    name: 'ListBody',
    components: {
        Location,
        LocationList,
        AddLocation,
        Button,
    },
    methods: {
      //Deletes a location from the locationList and from json db
      async deleteLocation(id) {
        if(confirm("Are your sure you want to delete " + this.locationList.find((location) => location.id === id).town)) {
          const response = await fetch(`backend/locationList/${id}`, { method: 'DELETE' } )
          if(response.status === 200) {
            this.locationList = this.locationList.filter((location) => location.id !== id)
          }
          else {
            alert('Error deleting location')
          }
        }
      },
      //toggles the show more info for the location with the id
      toggleShowLocationInfo(id) {
        this.locationList = this.locationList.map((location) => location.id === id ? {...location, showLocationInfo: !location.showLocationInfo} : location)
      },
      //Addes a new location to the locationList and json db
      async addLocation(location) {
        const response = await fetch('backend/locationList', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',  
          },
          body: JSON.stringify(location),
        })
        const data = await response.json()

        this.locationList = [...this.locationList, data]
      },
      //Toggles the add new location forum
      toggleAddLocation() {
        this.showAddLocation = !this.showAddLocation
      },
      //Fetches all locations from json db
      async fetchLocationsFromJsonDB() {
        const response = await fetch('backend/locationList')
        const data = await response.json()
        return data
      },
      //Fetches one location from json db
      async fetchLocationFromJsonDB(id) {
        const response = await fetch(`backend/locationList/${id}`)
        const data = await response.json()
        return data
      },
    },
    data() {
      return {
        //Boolean for adding new location forum
        showAddLocation: false,
        //List of locations
        locationList: [],
      };
    },
    async created() {
      //Fetch the data from the JSON Database
      this.locationList = await this.fetchLocationsFromJsonDB()
    },
  }
</script>

<style scoped>
h5 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

