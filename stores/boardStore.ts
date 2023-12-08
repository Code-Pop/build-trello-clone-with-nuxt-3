import { defineStore } from 'pinia'
import boardData from '~/data/board.json'

export const useBoardStore = defineStore('boardStore', () => {
  const board = ref(boardData)

  return {
    board
  }
})
