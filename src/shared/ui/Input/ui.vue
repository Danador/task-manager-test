<template>
    <label :for="id" class="field">
        <span v-if="label" class="field__label">{{ required ? `${ label } *` : label  }}</span>
        <Transition name="fade">
            <div v-if="showHint && hint && !model" class="hint">{{ hint }}</div>
        </Transition>
        <input 
            :id="id"
            :name="name"
            :type="type ? type : 'text'"
            v-model="model" 
            :placeholder="placeholder"
            :maxlength="maxlength"
            :minlength="minlength"
            :required="required"
            @focus="showHint = true"
            @blur="showHint = false"
            :disabled="disabled"
            :autocomplete="autocomplete"
            :inputmode="type === 'tel' ? 'tel' : 'text'"
            class="field__input"
        >
    </label>
</template>
<script setup lang="ts">
    import { ref } from 'vue';


    defineProps<{
        id: string;
        type?: 'text' | 'number' | 'email' | 'tel' | 'password';
        name?: string;
        required?: boolean;
        placeholder?: string;
        label?: string;
        autocomplete?: string;
        disabled?: boolean;
        mask?: string;
        maxlength?: number;
        minlength?: number;
        error?: string;
        hint?: string;
    }>()

    const model = defineModel();
    const showHint = ref<boolean>(false)
</script>

<style lang="scss">
    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>

<style scoped lang="scss">
    .field {
        display: grid;
        gap: 6px;
        position: relative;
        margin-bottom: 0px;

        &__label {
            font-weight: 500;
            color: rgb(56, 56, 56);
        }

        &__hint {
            position: absolute;
            bottom: 100%;
            left: 0;
            z-index: 10;
            border: 1px solid rgb(107 114 128);
            font-size: 12px;
            background-color: white;
            padding: 8px;
        }

        &__input {
            padding: 6px 12px;
            border: 1px solid rgb(252 165 165);
            box-sizing: border-box;
            outline: none;
            transition: all cubic-bezier(0.445, 0.05, 0.55, 0.95) 200ms;
            width: 100%;

            &:focus {
                outline: none;
            }

            &:focus-visible {
                border-color: rgb(185 28 28);
            }

            &:autofill {
                background-color: transparent;
            }

            &:disabled {
                background-color: #bfbfbf;
            }
        }
    }
</style>