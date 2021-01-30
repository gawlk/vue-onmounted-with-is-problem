<template>
    Main component
    <br />
    On app1 and 2 everything works app's buttons or navigator's ones On app3 if
    you use the buttons to navigate you'll see the first log 'mounted' and then
    'unmounted' and nothing if you continue back and forth but if you go to app3
    with the button and then use navigator's ones you'll only see the first
    'mounted' and then only the paths
    <br />
    {{ pageHistory }}
    <br />
    ---
    <br />
    <component :is="page" />
</template>

<script setup>
    import { shallowRef, defineAsyncComponent } from 'vue'

    const pages = import.meta.glob('./pages/**/*.vue')

    const routes = {}

    ref: pageHistory = []

    Object.keys(pages)
        .filter((key) => !key.includes('/components/'))
        .forEach((key) => {
            let path = key.toLowerCase().match(/^\.\/pages\/(.*)\.vue$/)[1]
            path = '/' + (path === 'index' ? '' : path.replace(/\/?index$/, ''))
            routes[path] = defineAsyncComponent(() => pages[key]())
        })

    const page = shallowRef()

    const setPage = (path) => {
        pageHistory.push(path)
        console.log(path)
        page.value =
            routes[path] ||
            routes['/NotFound'] ||
            routes['/404'] ||
            (() => '404')
    }

    setPage(window.location.pathname)

    window.addEventListener('popstate', () => {
        setPage(window.location.pathname)
    })
</script>
