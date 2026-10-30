<script setup lang="ts">
import ToolPanel from '../components/ToolPanel.vue'
import Canvas from '../components/Canvas.vue'
</script>

<template>
  <div class="draw">
    <ToolPanel />
    <Canvas />
  </div>
</template>

<style scoped>
.draw {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  align-items: flex-start;
}
</style>