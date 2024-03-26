<template>
    <Modal
        title="Редактировать"
        @close="emit('close')"
    >
        <TaskForm 
            mode="edit"
            v-model="task"
        />
        <Button variant="secondary" @click="onEdit">Сохранить</Button>
    </Modal>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { Button, Modal } from '@/shared';
    import { TaskForm } from '@/widgets';
    import { useTasksStore } from '@/entities';
    import type { ITask } from '@/entities';

    const props = defineProps<{
        id: string;
    }>()

    const emit = defineEmits(['close', 'edit'])

    const tasksStore = useTasksStore();

    const task = ref<ITask>(tasksStore.getTaskById(props.id));

    const onEdit = () => {
        tasksStore.tasks.find(i => i.id === props.id);
        emit('edit');
        emit('close');
    }
</script>