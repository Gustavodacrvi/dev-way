<script>
  import { isDesktop } from '../store'

  export let segment
  
  let big = true
</script>

<style>

.nav {
  background-color: var(--card-color);
  height: 55px;
  padding: 0 20px;
  position: relative;
  display: flex;
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
  display: flex;
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

</style>

<nav class="nav">
  <h1 class="title txt" class:big>Informáticos</h1>
  <div class="centralize">
    <input class="search" autocomplete="off" placeholder="Pesquisar..."/>
    <div>
      <span>asçldkfjasçdf</span>
    </div>
  </div>
</nav>