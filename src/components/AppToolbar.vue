<template>
        <v-ons-toolbar>
            <div class="left">
                <slot name="left"></slot>
            </div>
            <div class="center">{{title}}</div>
            <div class="right">
                <slot name="right"></slot>
            </div>
        </v-ons-toolbar>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Github App"
        }
    }
}
</script>

<style>

</style>
