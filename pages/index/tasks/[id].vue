<script setup>
import { useBoardStore } from '~/stores/boardStore'

const boardStore = useBoardStore()
const route = useRoute()
const router = useRouter()
const toast = useToast()

const task = computed(() => {
  return boardStore.getTask(route.params.id)
})

function deleteTask() {
  toast.add({
    title: 'Task deleted',
    description: `${task.value.name} has been deleted.`,
    icon: 'i-heroicons-trash',
    color: 'red'
  })
  boardStore.deleteTask(route.params.id)
  router.push('/')
}
</script>

<template>
  <div class="task-wrapper">
    <div v-if="task" class="task-view">
      <UFormGroup label="Name" class="w-full mb-4">
        <UInput type="text" v-model="task.name" />
      </UFormGroup>
      <UFormGroup label="Description" class="w-full mb-4">
        <UTextarea v-model="task.description" />
      </UFormGroup>
      <UButton icon="i-heroicons-trash" color="red" @click="deleteTask">
        Delete task
      </UButton>
    </div>
    <div v-else>
      <p>Task not found.</p>
    </div>
  </div>
</template>
