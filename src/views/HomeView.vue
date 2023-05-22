<template>
  <v-container>
    <v-row>
      <v-col
          v-for="n in limit"
          :key="n"
          :cols="12 / columnCount"
      >
        <v-card>
          <img :src="`https://picsum.photos/seed/seed${n}/800`" style="width: 100%" alt="Random image" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import {onBeforeMount, onBeforeUnmount, onMounted, ref, watch} from "vue";

const limit = ref(12)
const columnCount = ref(3)

const scrollPosition = ref(0)

const scrollListener = () => {
  scrollPosition.value = document.documentElement.scrollTop
}

watch(scrollPosition, (v) => {
  const max = document.documentElement.scrollHeight - document.documentElement.clientHeight
  if ((v + 200) >= max)
    limit.value += columnCount.value * 2

})

onBeforeMount(() => {
  window.addEventListener('scroll', scrollListener)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollListener)
})
</script>
