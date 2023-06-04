<template>
  <template>
    <v-row justify="center">
      <v-dialog
          v-model="show"
          scrollable="false"
      >
        <v-card class="text-center">
<!--          <v-card-title>-->
<!--            <span class="text-h5">Image {{ props.id }}</span>-->
<!--          </v-card-title>-->
          <v-card-text>
            <img alt="image" :src="`https://picsum.photos/seed/${props.id}/1680/900`">
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </template>
</template>

<script setup>
import {defineProps, defineEmits, ref, watch} from 'vue';

const emit = defineEmits(['close']);

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

<style scoped>
image {

}
</style>