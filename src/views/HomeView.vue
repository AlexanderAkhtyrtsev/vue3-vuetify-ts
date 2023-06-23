<template>
  <v-container style="max-width:1000px">
    <PreviewImageDialog v-if="showPreviewDialog"
                   :id="showPreviewDialog"
                   @close="showPreviewDialog = null"
    />

    <v-row>
      <v-col
          v-for="n in limit"
          :key="n"
          md="4"
          sm="12"
          cols="12"
      >
        <v-card>
          <img @click="showPreviewDialog = seed + n"
               :src="getUrlBySeed(seed + n, 500)"
               style="width: 100%" alt="Random image"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import {onBeforeMount, onBeforeUnmount, ref, watch} from "vue";
import {getUrlBySeed} from "@/api/picsum";
import PreviewImageDialog from "@/views/PreviewImageDialog.vue";

const limit = ref(12);

const scrollPosition = ref(0);

const seed = (Math.random() * 1000).toFixed()

const scrollListener = () => {
  scrollPosition.value = document.documentElement.scrollTop
}

const showPreviewDialog = ref<string|null>(null);

watch(scrollPosition, (v) => {
  const max = document.documentElement.scrollHeight - document.documentElement.clientHeight
  if ((v + 200) >= max)
    limit.value += 12
})

onBeforeMount(() => {
  window.addEventListener('scroll', scrollListener)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollListener)
})

</script>
