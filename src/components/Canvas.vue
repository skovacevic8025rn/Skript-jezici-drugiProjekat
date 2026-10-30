<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useDrawingStore } from '../stores/drawing'

const SIZE = 32
const store = useDrawingStore()
const grid = ref<string[][]>(
  Array.from({ length: SIZE }, () => Array(SIZE).fill('#ffffff'))
)
const isDrawing = ref(false)

function paint(r: number, c: number) {
  grid.value[r]![c] = store.color
}
function onDown(r: number, c: number) {
  isDrawing.value = true
  paint(r, c)
}
function onOver(r: number, c: number) {
  if (isDrawing.value) paint(r, c)
}
function stop() {
  isDrawing.value = false
}

onMounted(() => window.addEventListener('mouseup', stop))
onUnmounted(() => window.removeEventListener('mouseup', stop))
</script>

<template>
  <div class="canvas">
    <template v-for="(row, r) in grid" :key="r">
      <div
        v-for="(cell, c) in row"
        :key="c"
        class="cell"
        :style="{ backgroundColor: cell }"
        @mousedown.prevent="onDown(r, c)"
        @mouseover="onOver(r, c)"
      />
    </template>
  </div>
</template>

<style scoped>
.canvas {
  display: grid;
  grid-template-columns: repeat(32, 16px);
  user-select: none;
  border: 1px solid #999;
  width: fit-content;
}
.cell {
  width: 16px;
  height: 16px;
  border: 1px solid #eee;
  box-sizing: border-box;
}
</style>