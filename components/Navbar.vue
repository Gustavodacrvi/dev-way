<template>
    <div class="NavBar">
        <div></div>
        <div>
            <nuxt-link class="link" to="/">Home</nuxt-link>
            <nuxt-link class="link" to="/posts">Posts</nuxt-link>
            <nuxt-link class="link" to="/contato">Contato</nuxt-link>
        </div>
        <div></div>
        <div class="line"></div>
    </div>
</template>

<script>

export default {

}

</script>

<style>

.NavBar {
    height: 80px;
    border-bottom: 1px solid var(--light-gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nuxt-link-active {
    
}

</style>
