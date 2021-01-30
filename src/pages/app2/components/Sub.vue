<template>
    <span>mounted: {{ mounted }}</span>
</template>

<script setup>
    import { onMounted, onUnmounted } from 'vue'

    ref: mounted = 'no'

    onMounted(() => {
        console.log('mounted app2')
        mounted = 'yes'
    })

    onUnmounted(() => {
        console.log('unmounted app2')
    })
</script>
