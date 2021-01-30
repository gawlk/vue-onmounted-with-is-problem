<template>
    <span>mounted: {{ mounted }}</span>
</template>

<script setup>
    import { onMounted, onUnmounted } from 'vue'
    import { mounted, unmounted } from '../scripts/events'

    onMounted(mounted)

    onUnmounted(unmounted)
</script>
