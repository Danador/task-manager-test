<template>
    <form class="form">
        <template v-for="field in fields" :key="field.id">
            <Input 
                v-if="field.type !== 'checkbox'"
                :id="field.id"
                :label="field.label"
                :disabled="field.disabled"
                v-model="values[field.id]"
                :type="(field.type as InputType)"
            />
            <Checkbox 
                v-else
                :id="field.id"
                :label="field.label"
            />
        </template>
    </form>
</template>
<script setup lang="ts">
    import { Input, Checkbox } from '@/shared';
    import { computed, onMounted, ref } from 'vue';
    import { useTasksStore, type ITask } from '@/entities';

    const props = defineProps<{
        mode: 'create' | 'edit'
    }>()

    type InputType = 'text' | 'number' | 'email' | 'tel' | 'password';

    const model = defineModel<ITask>();
    const tasksStore = useTasksStore();

    const setTaskId = computed(() => {
        if (tasksStore.tasks.length) {
            const last = tasksStore.tasks[tasksStore.tasks.length - 1];
            return Number(last.id) + 1
        }
        return tasksStore.tasks.length + 1
    });

    const values = ref<ITask>({
        id: `${props.mode === 'create' ? setTaskId.value : model.value!.id}`,
        name: '',
        estimate: 0,
        realized: false,
    })

    const fields = [
        {
            id: 'id',
            label: 'Task id',
            required: true,
            disabled: true,
        },
        {
            id: 'name',
            label: 'Task name',
            required: true,
        },
        {
            id: 'estimate',
            label: 'Task estimate',
            required: true,
            type: 'number'
        },
        {
            id: 'realized',
            label: 'Realized',
            required: true,
            type: 'checkbox'
        }
    ]

    onMounted(() => {
        if (props.mode === 'edit') {
            values.value = model.value!;
        } else {
            model.value = values.value;
        }
    })
</script>

<style scoped lang="scss">
.form {
    display: grid;
    gap: 16px;
}
</style>