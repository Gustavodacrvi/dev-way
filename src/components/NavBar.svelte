<script>
  import { onMount } from 'svelte'

  export let segment

  let doc = null
  let scrollTop = 0

  $: act = (route) => segment === route
  $: isShadowMode = scrollTop > 50
  $: lineStyle = () => {
    segment
    if (doc) {
      const nav = doc.getElementsByClassName('NavBar')[0]
      const act = nav.getElementsByClassName('active')[0]
  
      return `left: ${act.offsetLeft}px;width: ${act.offsetWidth}px;`
    }
    return ''
  }

  onMount(() => {
    doc = document
    window.addEventListener('scroll', () => scrollTop = window.scrollY)
    lineStyle()
  })
</script>

<div class="NavBar" class:shadow={isShadowMode}>
  <div class="wrapper">
    <div class="logo">DEV WAY</div>
    <div class="links">
      <a href="/home" class="link" class:active={act('home')}>Home</a>
      <a href="/posts" class="link" class:active={act('posts')}>Posts</a>
      <a href="/contato" class="link" class:active={act('contato')}>Contato</a>
    </div>
    <div class="options">

    </div>
    <span class="line" style={lineStyle()}></span>
  </div>
</div>
<div class="fake-navbar"></div>

<style>

.links {
  margin-left: -145px;
}

.line {
  position: absolute;
  height: 4px;
  border-radius: 6px;
  width: 100px;
  background-color: var(--primary);
  bottom: -1.5px;
  transition: left .3s;
}

.link {
  text-decoration: none;
  padding: 0 16px;
  font-size: 1.1em;
  transition: color .3s;
}

.active, .link:hover {
  color: var(--primary);
}

.logo {
  font-size: 2.3em;
}

.wrapper {
  position: relative;
  margin: 0 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.NavBar {
  border-bottom: 1px solid var(--light-gray);
  height: 80px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition-duration: .4s;
  background-color: white;
}

.fake-navbar {
  height: 80px;
}

.shadow {
  height: 60px;
  box-shadow: 0 2px 4px rgba(100,100,100,.2);
  border: none;
}

</style>
