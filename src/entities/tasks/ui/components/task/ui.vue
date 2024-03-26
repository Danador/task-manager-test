<template>
    <tr class="task-row">
        <td>{{ id }}</td>
        <td>{{ name }}</td>
        <td class="text-center">{{ estimate }} h</td>
        <td>{{ realized }}</td>
        <td>
            <Button 
                variant="secondary"
                size="small"
                @click="$emit('edit')"
            >edit</Button>
        </td>
        <td>
            <Button
                size="small"
                @click="$emit('delete')"
            >delete</Button>
        </td>
    </tr>
</template>

<script setup lang="ts">
    import { Button } from '@/shared';
    import type { ITask } from '@/entities/tasks/model/types';

    defineProps<ITask>()

    defineEmits(['edit', 'delete'])
</script>

<style scoped lang="scss">
    .text-center {
        text-align: center;
    }

    .task-row td {
        padding: 8px 10px;
        border-bottom: 1px solid white;

        &:first-child {
            border-left: 1px solid white;
        }

        &:last-child {
            border-right: 1px solid white;
        }
    }
</style>