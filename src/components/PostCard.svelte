<script>

  export let title
  export let author
  export let descr
  export let time
  export let date
</script>

<div class="card">
  <h3 class="marg title">{title}</h3>
  <div class="marg fade">
    <span>{author}</span> . 
    <span>{date}</span> . 
    <span>{time}</span>
  </div>
  <p class="marg fade">{descr}</p>
</div>

<style>

.card {
  border-radius: 6px;
  border: 1px solid var(--light-gray);
  padding: 6px 46px;
  transition: box-shadow .2s;
}

.title {
  font-size: 2.1em;
  cursor: pointer;
}

.title:hover {
  text-decoration: underline;
}

.card + .card {
  margin-top: 20px;
}

.marg {
  margin: 24px 0;
}

.fade {
  opacity: .8;
}

</style>
