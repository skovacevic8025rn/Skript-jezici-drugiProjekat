import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDrawingStore = defineStore('drawing', () => {
  const color = ref('#000000')
  const tool = ref<'pencil'>('pencil')
  return { color, tool }
})