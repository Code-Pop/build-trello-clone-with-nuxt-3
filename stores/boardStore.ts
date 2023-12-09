import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import boardData from '~/data/board.json'

export const useBoardStore = defineStore('boardStore', () => {
  const board = useStorage('board', boardData)

  function addColumn(columnName) {
    board.value.columns.push({
      name: columnName,
      tasks: []
    })
  }

  function deleteColumn(columnIndex) {
    board.value.columns.splice(columnIndex, 1)
  }

  return {
    board,
    addColumn,
    deleteColumn
  }
})
