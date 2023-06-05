<template>
  <template>
    <v-dialog
        v-model="show"
        scrollable="false"
    >
      <v-card class="text-center">
<!--          <v-card-title>-->
<!--            <span class="text-h5">Image {{ props.id }}</span>-->
<!--          </v-card-title>-->
        <v-card-text>
          <div v-if="!loaded">
            <v-progress-circular indeterminate color="primary" />
          </div>
          <img class="preview-image" @load="loaded=true" alt="image" :src="`https://picsum.photos/seed/${props.id}/1680/900`">
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>
</template>

<script setup>
import {defineProps, defineEmits, ref, watch} from 'vue';

const emit = defineEmits(['close']);

const loaded = ref(false);

const props = defineProps({
  id: {
    type: Number,
    required: true,
  }
})

const show = ref(!!props.id);

function close() {
  emit('close');
  show.value = false;
}

watch(show, (val) => {
  if (!val)
    close();
})

</script>

<style>
.preview-image {
  max-width: 100%;
  max-height: 100%;
}
</style>