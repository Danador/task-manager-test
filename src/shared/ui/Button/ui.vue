<template>
    <button 
        class="btn"
        :class="`btn__variant--${variant} btn__size--${size}`"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
    withDefaults(defineProps<{
        variant?: 'primary' | 'secondary';
        size?: 'small' | 'normal' | 'big';
    }>(), {
        variant: 'primary',
        size: 'normal',
    })
</script>

<style lang="scss" scoped>
    .btn {
        border-radius: 4px;
        font-weight: 600;
        transition: all cubic-bezier(0.445, 0.05, 0.55, 0.95) 200ms;
        cursor: pointer;
        max-width: max-content;
        box-sizing: border-box;

        &__variant--primary {
            background-color: #850c0c;
            color: rgb(197, 191, 191);
            border: 1px solid transparent;

            &:hover {
                color: white;
                background-color: #a11212;
            }

            &:active {
                background-color: #580808;
            }

            &:focus {
                outline: none;
            }

            &:focus-visible {
                outline: none;
                border-color: rgb(197, 191, 191);
                color: white;
            }
        }

        &__variant--secondary {
            background-color: #0b1cb6;
            color: white;
            border: none;

            &:hover {
                background-color: #0b1997;
            }

            &:active {
                background-color: #0b1997;
            }

            &:focus {
                outline: none;
            }

            &:focus-visible {
                outline: none;
                background-color: #0b1997;
            }
        }

        &__size--small {
            font-size: 14px;
            padding: 8px 10px;
        }

        &__size--normal {
            font-size: 16px;
            padding: 10px 16px;
        }

        &__size--big {
            font-size: 18px;
            padding: 12px 18px;
        }
    }
</style>
