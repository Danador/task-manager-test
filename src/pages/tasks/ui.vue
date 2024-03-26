<template>
    <div class="container">
        <table v-if="tasksStore.tasks.length" class="table">
            <thead>
                <tr>
                    <th 
                        v-for="(col, index) in COLS" 
                        :key="col"
                        class="table__column"
                        :colspan="index === (COLS.length - 1) ? 2 : 1"
                    >{{ col }}</th>
                </tr>
            </thead>
            <tbody>
                <Task 
                    v-for="task in tasksStore.tasks"
                    :key="task.name"
                    :id="task.id"
                    :name="task.name"
                    :estimate="task.estimate"
                    :realized="task.realized"
                    @edit="onEdit(task.id)"
                    @delete="onDelete(task.id)"
                />
            </tbody>
        </table>
        <span v-else>Тасок нет</span>
        <Button 
            variant="primary"
            size="normal"
            @click="showCreateModal = true"
        >Создать таску</Button>
    </div>
    <CreateTask
        v-if="showCreateModal"
        @close="showCreateModal = false"
        @created="onCreate"
    />
    <EditTask 
        v-if="showEditModal"
        :id="activeId"
        @close="showEditModal = false"
        @edit="edited()"
    />
    <DeleteTask 
        v-if="showDeleteModal"
        :id="activeId"
        @close="showDeleteModal = false"
        @delete="deleted()"
    />
</template>
<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { Task } from '@/entities';
    import { CreateTask, EditTask, DeleteTask } from '@/widgets';
    import { Button } from '@/shared';
    import { useTasksStore } from '@/entities';
    import { saveArrayToCookies, getArrayFromCookies } from '@/shared';

    const COLS = ['Id', 'Name', 'Estimate', 'Realized', 'Control']

    const tasksStore = useTasksStore();

    const showEditModal = ref(false);
    const showCreateModal = ref(false);
    const showDeleteModal = ref(false);
    const activeId = ref<string>('');

    const onCreate = () => {
        showCreateModal.value = false;
        saveArrayToCookies('tasks', tasksStore.tasks);
    }

    const onEdit = (id: string) => {
        activeId.value = id;
        showEditModal.value = true;
    }

    const onDelete = (id: string) => {
        activeId.value = id;
        showDeleteModal.value = true;
    }

    const edited = () => {
        showEditModal.value = false;
        saveArrayToCookies('tasks', tasksStore.tasks);
    }

    const deleted = () => {
        showDeleteModal.value = false;
        saveArrayToCookies('tasks', tasksStore.tasks);
    }

    onMounted(() => {
        tasksStore.tasks = getArrayFromCookies('tasks');
    })
</script>

<style lang="scss" scoped>
    .container {
        display: grid;
        gap: 12px;
    }

    .table {
        border-collapse: collapse;

        &__column {
            padding: 8px 10px;
            color: white;
            border: 1px solid white;
        }
    }
</style>