<template>
  <v-navigation-drawer
      v-model="draw"
      absolute
      bottom
      temporary
  >
    <v-list nav dense>
      <v-list-item-group
          active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Navigation',
  props: {
    show: Boolean,
    default: () => false
  },
  data() {
    return {
      draw: this.show
    }
  },
  watch: {
    show(show) {
      this.draw = show;
    }
  }
})

</script>

<style scoped>

</style>
