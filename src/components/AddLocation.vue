<template>
  <!-- Add new location Forum (Hidden) -->
  <form @submit="onSubmit" class="add-form">

    <!-- Town or City -->
    <div class="form-control">
        <label>Location</label>
        <input type="text" v-model="text" name="text" placeholder="Town or City Name" />
    </div>

    <!-- State selection -->
    <div class="form-control">
        <label>State</label>
        <select name="stateSelection" id="stateSelection" v-model="state">
          <option value="AL"> Alabama </option>
          <option value="Ak"> Alaska </option>
          <option value="AZ"> Arizona </option>
          <option value="AR"> Arkansas </option>
          <option value="CA"> California </option>
          <option value="CO"> Colorado </option>
          <option value="CT"> Connecticut </option>
          <option value="DE"> Delaware </option>
          <option value="FL"> Florida </option>
          <option value="GA"> Georgia </option>
          <option value="HI"> Hawaii </option>
          <option value="ID"> Idaho </option>
          <option value="IL"> Illinois </option>
          <option value="IN"> Indiana </option>
          <option value="IA"> Iowa </option>
          <option value="KS"> Kansas </option>
          <option value="KY"> Kentucky </option>
          <option value="LA"> Louisiana </option>
          <option value="ME"> Maine </option>
          <option value="MD"> Maryland </option>
          <option value="MA"> Massachusetts </option>
          <option value="MI"> Michigan </option>
          <option value="MN"> Minnesota </option>
          <option value="MS"> Mississippi </option>
          <option value="MO"> Missouri </option>
          <option value="MT"> Montana </option>
          <option value="NE"> Nebraska </option>
          <option value="NV"> Nevada </option>
          <option value="NH"> New Hampshire </option>
          <option value="NJ"> New Jersey </option>
          <option value="NM"> New Mexico </option>
          <option value="NY"> New York </option>
          <option value="NC"> North Carolina </option>
          <option value="ND"> North Dakota </option>
          <option value="OH"> Ohio </option>
          <option value="OK"> Oklahoma </option>
          <option value="OR"> Oregon </option>
          <option value="PA"> Pennsylvania </option>
          <option value="RI"> Rhode Island	 </option>
          <option value="SC"> South Carolina </option>
          <option value="SD"> South Dakota </option>
          <option value="TN"> Tennessee </option>
          <option value="TX"> Texas </option>
          <option value="UT"> Utah </option>
          <option value="VT"> Vermont </option>
          <option value="VA"> Virginia </option>
          <option value="WA"> Washington </option>
          <option value="WV"> West Virginia </option>
          <option value="WI"> Wisconsin </option>
          <option value="WY"> Wyoming </option>
        </select>
    </div>

    <!-- Submit button -->
    <input id="submitbutton" type="submit" value="Save Location" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: 'AddLocation',
  data() {
      return {
          text: '',
          state: ''
      }
  },
  methods: {
    //Clicking the submit button
    onSubmit(e) {
        e.preventDefault()
        //Checks to make sure Town or City field is not blank
        if(!this.text){
            alert("Please enter location information")
            return
        }
        const newLocation = {
            town: this.text,
            state: this.state,
            reminder: this
        }
        this.text = ""
        this.state = ""

        this.$emit('add-location', newLocation)
    }
  },
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input, select{
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
#submitbutton {
  background-color: green;
}
</style>