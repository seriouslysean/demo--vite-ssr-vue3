<template>
    <div class="app">
        <button @click="handleIncrement">
            {{ count }}
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(1);
const handleIncrement = () => {
    count.value += 1;
};
</script>
