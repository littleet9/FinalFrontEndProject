<template>
    <div :key="location.id" v-for="location in locationList">
        <!-- Location -->
        <Location
            @toggle-show-info="$emit('toggle-show-list-info', location.id)"
            @delete-location="$emit('delete-location', location.id)"
            :location="location"
        />
    </div>
</template>

<script>
import Location from "./Location.vue"

export default {
    name: 'LocationList',
    props: {
        locationList: Array
    },
    components: {
        Location,
    },
    emits: ['delete-location', 'toggle-show-list-info'],
}
</script>
