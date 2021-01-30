<template>
    App page
    <br />
    <Button href="/">Go to index</Button>
    <br />
    mounted: {{ mounted }}
</template>

<script setup>
    import { onMounted, onUnmounted } from 'vue'

    ref: mounted = 'no'

    onMounted(() => {
        console.log('mounted app')
        mounted = 'yes'
    })

    onUnmounted(() => {
        console.log('unmounted app')
    })
</script>
