<template>
  <div class="Login card rb" @click.stop>
    <h2 class="title">Bem vindo,</h2>
    <span class="sub-title">insira as informações para continuar.</span>
    <div style="height: 30px"></div>
    <div>
      <InputApp
        class="form"
        placeholder="Nome de usuário:"
        type="text"
      />
    </div>
    <div style="height: 10px"></div>
    <div>
      <InputApp
        class="form"
        placeholder="Senha:"
        type="text"
        :borderLine="true"
      />
    </div>
    <div style="height: 30px"></div>
    <div class="center">
      <Button class="btn" value="Venha se divertir!"/>
    </div>
  </div>
</template>

<script>

import InputVue from '../Auth/Input.vue'
import ButtonVue from '../Auth/Button.vue'

export default {
  components: {
    InputApp: InputVue,
    Button: ButtonVue,
  }  
}

</script>

<style scoped>

.center {
  display: flex;
  justify-content: center;
}

.card {
  padding: 40px;
  padding-right: 0;
  flex-basis: 450px;
  overflow: hidden;
}

.title {
  margin: 0;
  color: var(--orange);
}

.btn {
  margin-left: -30px;
}

</style>
