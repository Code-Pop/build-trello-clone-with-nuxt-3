<script setup>
import { useBoardStore } from '~/stores/boardStore'

const boardStore = useBoardStore()
const route = useRoute()

const task = computed(() => {
  return boardStore.getTask(route.params.id)
})
</script>

<template>
  <div class="task-wrapper">
    <div class="task-view">
      <h1>{{ task.name }}</h1>
      <p>{{ task.description }}</p>
    </div>
  </div>
</template>
