<template>
    <label class="checkbox" :for="id">
        <span class="checkbox__label" v-if="label">
            {{ label }}
        </span>
        <input 
            class="checkbox__hide"
            :id="id"
            :name="id"
            v-model="model"
            type="checkbox"
        >
        <i class="checkbox__visible"></i>
    </label>
</template>

<script setup lang="ts">
    defineProps<{
        id: string;
        label: string;
    }>()

    const model = defineModel()
</script>

<style lang="scss" scoped>
    .checkbox {
        position: relative;
        display: flex;
        gap: 12px;
        align-items: center;

        &__label {
            color: rgb(56, 56, 56);
            font-weight: 500;
            cursor: pointer;
        }

        &__hide {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
        }

        &__visible {
            width: 24px;
            height: 24px;
            display: block;
            border-radius: 6px;
            border: 1px solid #e6dcdc;
            position: relative;
            transition: all cubic-bezier(0.455, 0.03, 0.515, 0.955) 200ms;
            cursor: pointer;

            &::before {
                content: '';
                position: absolute;
                opacity: 0;
                width: 12px;
                height: 12px;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                transition: all cubic-bezier(0.455, 0.03, 0.515, 0.955) 200ms;
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
            }
        }
    }

    .checkbox__hide:checked ~ .checkbox__visible {
        background-color: #0b1cb6;
    }

    .checkbox__hide:checked ~ .checkbox__visible::before {
        opacity: 100%;
    }
</style>

