<template>
  <v-app id="inspire">
    <v-app-bar
        app
        shrink-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $t('homepage') }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <navigation-drawer :show="drawer"></navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref  } from "vue";
import NavigationDrawer from './components/NavigationDrawer';

const drawer = ref(false);
</script>
