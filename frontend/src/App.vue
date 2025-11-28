<template>
  <div id="app">
    <Navbar />
    <main class="container" style="padding-top: 2rem; padding-bottom: 2rem;">
      <Suspense>
        <template #default>
          <RouterView />
        </template>
        <template #fallback>
          <div class="loading">
            <div class="spinner"></div>
          </div>
        </template>
      </Suspense>
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>
