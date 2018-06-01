<template>
    <v-ons-card>
      <img src="https://pbs.twimg.com/media/Bt5MoW0CIAE9Fda.jpg" style="width: 100%">
        <div class="title">
            No repos found
        </div>
      <div class="content">
        <v-ons-list>
          <v-ons-list-item>There are no {{ type|plural }} here!</v-ons-list-item>
        </v-ons-list>
      </div>
    </v-ons-card>
</template>

<script>
import pluralize from 'pluralize'
export default {
    props:{
        type:{
            type: String
        }
    },
    filters:{
        plural: function (value) {
            if (!value) return ''
            return pluralize(value)
        } 
    }
}
</script>