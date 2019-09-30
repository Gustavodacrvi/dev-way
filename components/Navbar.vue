<template>
    <div class="NavBar">
        <div class="wrapper">
            <div class="logo">DEV WAY</div>
            <div>
                <nuxt-link class="link" to="/">Home</nuxt-link>
                <nuxt-link class="link" to="/posts">Posts</nuxt-link>
                <nuxt-link class="link" to="/contato">Contato</nuxt-link>
            </div>
            <div>açsdlfj</div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
        this.moveLine()
        window.addEventListener('resize', this.moveLine)
    },
    methods: {
        moveLine() {
            const line = document.getElementsByClassName('line')[0]
            const active = document.getElementsByClassName('nuxt-link-exact-active')[0]
            
            if (line && active) {
                line.style.width = active.offsetWidth + 'px'
                line.style.left = active.offsetLeft + 'px'
            }
        }
    },
    watch: {
        $route() {
            setTimeout(() => {
                this.moveLine()
            })
        }
    }
}

</script>

<style>

.NavBar {
    border-bottom: 1px solid rgba(100,100,100, .4);
    display: flex;
    align-items: center;
    background-color: white;
    position: absolute;
    height: 80px;
    width: 100%;
    left: 0;
    top: 0;
}

.logo {
    font-size: 2.2em;
}

.wrapper {
    margin: 0 100px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.link {
    text-decoration: none;
    color: rgba(100, 100, 100, .7);
    display: inline-block;
    padding: 0 24px;
    transition-duration: .3s;
}

.line {
    position: absolute;
    bottom: -2px;
    height: 3px;
    width: 100px;
    border-radius: 3px;
    background-color: orange;
    transition-duration: .2s;
}

.nuxt-link-exact-active {
    color: orange;
}

</style>
