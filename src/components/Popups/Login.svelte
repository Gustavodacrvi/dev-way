<script>
  import Input from './../Input.svelte'
  import Button from './../Button.svelte'

  import { addToast } from './../../store/'

  let username = ''
  let password = ''

  $: atLeastOneEmpty = username === '' || password === ''
  $: tooLong = username.length > 100 || password.length > 100

  const sendRequest = () => {
    console.log(username, password)
    if (atLeastOneEmpty) {
      addToast({
        name: 'Por favor coloque todas as informações.',
        seconds: 3,
        type: 'error',
      })
    } else if (tooLong) {
      addToast({
        name: 'O número máximo de caracteres é 100.',
        seconds: 3,
        type: 'error',
      })
    }
    else {
      // faz login
    }
  }
  
</script>

<div class="card cb">
  <h1 class="title">Bem Vindo,</h1>
  <span class="tiny-title">entre na sua conta para continuar</span>

  <div class="inputs">
    <Input
      placeholder="nome do usuário:"
      value={username}
      on:update={({detail}) => username = detail.str}
    />
    <Input
      placeholder="senha:"
      type="password"
      value={password}
      on:update={({detail}) => password = detail.str}
    />
  </div>
  <div class="button">
    <Button value="Continuar" on:click={sendRequest}/>
  </div>
</div>

<style>

.inputs {
  padding: 20px 0;
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
  border-radius: 8px;
  z-index: 50;
  padding: 40px;
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

