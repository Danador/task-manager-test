<template>
    <Modal
        title="Удаление"
        @close="emit('close')"
    >
        <h3 class="title">Вы уверены что хотите удалить таску? <br> № {{ id }}</h3>
        <Button variant="secondary" @click="onDelete">Удалить</Button>
    </Modal>
</template>

<script setup lang="ts">
    import { Button, Modal } from '@/shared';
    import { useTasksStore } from '@/entities';

    const props = defineProps<{
        id: string;
    }>()

    const emit = defineEmits(['close', 'delete'])

    const tasksStore = useTasksStore();

    const onDelete = () => {
        tasksStore.tasks = tasksStore.tasks.filter(i => i.id !== props.id);
        emit('delete');
    }
</script>

<style scoped lang="scss">
    .title {
        color: black;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
    }
</style>