<template>
  <v-dialog
      v-model="show"
      :close-on-back="true"
      class="h-100"
  >
    <v-card class="text-center">
      <!--          <v-card-title>-->
      <!--            <span class="text-h5">Image {{ props.id }}</span>-->
      <!--          </v-card-title>-->
      <v-card-text style="padding: 0">
        <img class="preview-image"
             alt="image"
             v-show="loaded"
             @load="loaded = true"
             ref="displayImage"
             :src="getUrlBySeed(props.id, 2000)"
        >
        <img
             v-if="!loaded"
             class="preview-image"
             alt="image"
             :src="getUrlBySeed(props.id, 500)"
        >
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue';
import { getUrlBySeed } from "@/api/picsum";

const emit = defineEmits(['close']);

const displayImage = ref();
const show = ref(true);
const loaded = ref(false);

const props = defineProps<{ id: string }>();

function close() {
  emit('close');
  show.value = false;
}

watch(show, (val) => {
  if (!val) close();
})
</script>

<style>

.preview-image {
  max-width: 100%;
  max-height: 100%;
}
</style>