<template>
    <v-ons-navigator
    :page-stack="pageStack"
    @push-page="pushPage"
    ></v-ons-navigator>
</template>

<script>
import App from '../App.vue'
export default {
    data() {
        return {
            pageStack: [ App ]
    }
  },
    methods: {
    pushPage(page) {
      this.pageStack.push(page)
    }
    }
    
}
</script>

<style>

</style>
