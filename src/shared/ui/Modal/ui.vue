<template>
    <Teleport to="body">
        <div class="container">
            <div 
                @click="$emit('close')" 
                class="overlay"
            >
            </div>
            <div 
                ref="modal"
                class="modal"
            >
                <div class="modal__head">
                    <h2 v-if="title" class="modal__title">{{ title }}</h2>
                    <button class="modal__close" @click="$emit('close')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path d="m18.717 6.697-1.414-1.414L12 10.586 6.697 5.283 5.283 6.697 10.586 12l-5.303 5.303 1.414 1.414L12 13.414l5.303 5.303 1.414-1.414L13.414 12z"/>
                        </svg>
                    </button>
                </div>
                <div class="modal__body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    defineProps<{
        title: string;
    }>()

    defineEmits(['close'])

    const modal = ref<HTMLDivElement | null>(null);
</script>

<style scoped lang="scss">
    .container {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,40%);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .overlay {
        position: absolute;
        inset: 0;
        z-index: 99;
    }

    .modal {
        background: white;
        padding: 24px;
        border-radius: 12px;
        display: grid;
        gap: 20px;
        min-width: 450px;
        z-index: 100;
        position: relative;

        &__head {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__title {
            color: #482727;
        }

        &__close {
            padding: 0;
            margin: 0;
            background: transparent;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            transition: all cubic-bezier(0.445, 0.05, 0.55, 0.95) 200ms;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                background-color: rgba(88, 59, 59, 60%);
            }
        }

        &__body {
            display: grid;
            gap: 12px;
        }
    }
</style>