<template>
  <v-navigation-drawer
      :model-value="props.show"
      temporary=""
  >
    <v-list nav="" dense>
      <v-list-item-group
          active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-title>TBD</v-list-item-title>
        </v-list-item>

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps<{ show: boolean  }>();
</script>

<style scoped>

</style>
