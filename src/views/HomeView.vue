<template>
  <v-container>
    <v-row>
      <v-col
          v-for="n in 240"
          :key="n"
          cols="2"
      >
        <v-card>
          <img :src="'https://picsum.photos/300?random=' + n" alt="Random image" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>
