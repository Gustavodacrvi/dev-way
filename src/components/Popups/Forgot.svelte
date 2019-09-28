<script>
  import Input from './../Input.svelte'
  import Button from './../Button.svelte'

  let email = ''
</script>

<div class="card cb rb">
  <div class="tac">
    <h2 class="title">Reset password or e-mail</h2>
  </div>
  <div class="content">
    <Input placeholder="E-mail" on:update={({detail}) => email = detail.str}/>
  </div>
  <div class="btn">
    <Button value="Mandar e-mail"/>
  </div>
</div>

<style>

.card {
  margin-top: 100px;
  z-index: 50;
  flex-basis: 600px;
  padding: 40px;
}

.title {
  color: var(--blue);
  margin: 0;
}

.tac {
  text-align: center;
}

.btn {
  display: flex;
  justify-content: center;
}

</style>
