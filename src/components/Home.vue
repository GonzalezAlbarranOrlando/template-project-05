<template>
    <div style="background-color: grey;">
        <h1>Home</h1>
        <nav>
            <router-link to="/contact">Contact</router-link> |
            <router-link to="/helloWorld">Hello World</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
      name: 'HomeView'
    }
</script>
