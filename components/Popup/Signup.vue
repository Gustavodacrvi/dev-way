<template>
  <div class="Signup card rb" :class="platform" @click.stop>
    <div class="wrapper">
      <div class="header">
        <h2 class="title">Bem vindo,</h2>
        <span class="sub-title">insira as informações para continuar.</span>
      </div>
      <div>
        <div style="height: 30px"></div>
        {{username}}
        <div>
          <InputApp
            v-model="username"
            class="form"
            placeholder="Nome de usuário:"
            type="text"
          />
        </div>
        <div class="inp-margin" style="height: 10px"></div>
        <div>
          <InputApp
            v-model="email"
            class="form"
            placeholder="E-mail:"
            type="text"
            :borderLine="true"
          />
        </div>
        <div class="inp-margin" style="height: 10px"></div>
        <div>
          <InputApp
            v-model="password"
            class="form"
            placeholder="Senha:"
            type="text"
            :borderLine="true"
          />
        </div>
        <div class="inp-margin" style="height: 10px"></div>
        <div>
          <InputApp
            v-model="confirm"
            class="form"
            placeholder="Confirmar senha:"
            type="text"
            :borderLine="true"
          />
        </div>
      </div>
      <div>
        <div style="height: 30px"></div>
        <div class="center">
          <Button class="btn" value="Venha se divertir!"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import InputVue from '../Auth/Input.vue'
import ButtonVue from '../Auth/Button.vue'

import { mapGetters } from 'vuex'

import axios from 'axios'

export default {
  components: {
    InputApp: InputVue,
    Button: ButtonVue,
  },
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirm: '',
    }
  },
  methods: {
    login() {
      /* axios.post('/login', {
        name,
      }) */
    }
  },
  computed: {
    ...mapGetters(['platform']),
  }
}

</script>

<style scoped>

.center {
  display: flex;
  justify-content: center;
}

.card {
  padding-right: 0;
  flex-basis: 450px;
  overflow: hidden;
}

.wrapper {
  margin: 35px;
}

.mobile .wrapper {
  height: 70%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.title {
  margin: 0;
  color: var(--orange);
  font-size: 1.3em;
}

.sub-title {
  font-size: 1.1em;
}

.btn {
  margin-left: -30px;
}

</style>
