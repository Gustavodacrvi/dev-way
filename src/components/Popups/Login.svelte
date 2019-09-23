<script>
  import Input from './../Input.svelte'
  import Button from './../Button.svelte'

  let nomeUsuario = ''
  let password = ''

  const handleName = ({detail}) => {
    nomeUsuario = detail.str
  }
  const handlePassword = ({detail}) => {
    password = detail.str
  }
</script>

<div class="card">
  <h1 class="title">Bem Vindo,</h1>
  <span class="tiny-title">entre na sua conta para continuar</span>

  <div class="inputs">
    <Input placeholder="nome do usuário:" value={nomeUsuario} on:update={handleName}/>
    <Input placeholder="senha:" type="password" value={password} on:update={handlePassword}/>
  </div>
  <div class="button">
    <Button value="Continuar"/>
  </div>
</div>

<style>

.inputs {
  margin: 14px 0;
}

.button {
  width: 100%;
  display: flex;
  justify-content: center;
}

.card {
  flex-basis: 600px;
  margin: 6px;
  margin-top: 100px;
  background-color: #232222;
  border-radius: 8px;
  z-index: 50;
  padding: 50px;
}

.title {
  color: var(--blue);
  text-shadow: 0 0 1px rgba(61,111,208,.4);
  margin: 0;
}

.tiny-title {
  color: var(--white);
  font-size: 1.1em;
}

</style>

