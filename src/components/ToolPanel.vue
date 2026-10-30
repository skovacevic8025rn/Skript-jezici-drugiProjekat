<script setup lang="ts">
import { useDrawingStore } from '../stores/drawing'
const store = useDrawingStore()
</script>

<template>
  <div class="panel">
    <button :class="{ active: store.tool === 'pencil' }" @click="store.tool = 'pencil'">
      ✎ Pencil
    </button>
    <label>
      Color:
      <input type="color" v-model="store.color" />
    </label>
  </div>
</template>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: #1e1f22;
  border-radius: 8px;
}
.active {
  outline: 2px solid #2d2d44;
}

button {
  font-weight: bold;
}

</style>