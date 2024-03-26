<template>
    <Modal
        title="Создание"
        @close="emit('close')"
    >
        <TaskForm 
            mode="create"
            v-model="task"
        />
        <Button variant="secondary" @click="onCreate">Создать</Button>
    </Modal>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { Button, Modal } from '@/shared';
    import { TaskForm } from '@/widgets';
    import { useTasksStore } from '@/entities';
    import type { ITask } from '@/entities';

    const emit = defineEmits(['close', 'created'])

    const tasksStore = useTasksStore();

    const task = ref<ITask>();

    const onCreate = () => {
        if (task.value) {
            tasksStore.tasks.push(task.value);
            emit('created');
            emit('close');
        }
    }
</script>