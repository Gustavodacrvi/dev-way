<script>
  import { isDesktop, popUp, pushPopup } from '../store'

  export let segment
  
  let big = true

  const isActive = (name) => {
    return name === segment
  }
</script>

<style>

  .nav, .centralize {
    display: flex;
  }

  .nav {
    background-color: var(--card-color);
    height: 55px;
    padding: 0 20px;
    position: relative;
  }

  .title {
    margin: 0;
    display: inline-block;
    transform: translateY(8px);
  }

  .big {
    color: var(--blue);
    font-size: 60px;
  }

  .centralize {
    flex-basis: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .search {
    transform: translateX(30px);
    background-color: var(--back-color);
    border-radius: 100px;
    padding: 8px;
    outline: none;
    font-size: .8em;
    font-family: var(--font-family);
    color: var(--white);
    border: 0px;
    width: 180px;
    transition-property: width, border;
    transition-duration: .3s;
    transition-timing-function: ease-in;
  }

  .search:focus {
    width: 270px;
    transition-property: width, border;
    transition-duration: .3s;
    transition-timing-function: ease-out;
    border: 2px solid var(--blue);
  }

  .link {
    color: var(--white);
    text-decoration: none;
    margin-right: 14px;
    cursor: pointer;
    transition-duration: .2s;
  }

  .link:hover, .link.selected {
    color: var(--blue);
  }

</style>

<nav class="nav">
  <h1 class="title txt" class:big>Informáticos</h1>
  <div class="centralize">
    <input class="search" autocomplete="off" placeholder="Pesquisar..."/>
    <div>
      <a class="link" class:selected={isActive("posts")} href="/posts">Posts</a>
      <span class="link" on:click={() => pushPopup({comp: 'Login'})}>Entrar</span>
      <a class="link" class:selected={isActive("junte-se")} href="/junte-se">Junte-se</a>
    </div>
  </div>
</nav>