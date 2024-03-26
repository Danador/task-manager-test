<template>
    <h1>Welcome to the Task Manager</h1>
    <Button 
        variant="secondary"
        size="normal"
        @click="router.push('/tasks')"
    >
        Go to tasks
    </Button>
</template>
<script setup lang="ts">
    import { Button } from '@/shared';
    import router from '@/app/router';
</script>