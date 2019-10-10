<template>
  <div class="Login card rb" :class="platform" @click.stop>
    <div class="wrapper">
      <div class="header">
        <h2 class="title">Bem vindo,</h2>
        <span class="sub-title">insira as informações para criar uma conta.</span>
      </div>
      <div>
        <div style="height: 30px"></div>
        <div>
          <InputApp
            v-model="name"
            class="form"
            placeholder="Nome de usuário:"
            type="text"
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
            placeholder="Confirme a senha:"
            type="password"
            :borderLine="true"
          />
        </div>
      </div>
      <div>
        <div style="height: 30px"></div>
        <div class="center">
          <Button class="btn" value="Venha se divertir!" @click="login"/>
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
      name: '',
      password: '',
      confirm: '',
    }
  },
  methods: {
    login() {
      const { name, password, confirm } = this
      const toast = (toast) => {
        this.$store.commit('pushToast', toast)
      }

      if (name === '' || password === '' || confirm === '')
        toast({
          name: 'Preenche a porra dos campos.',
          seconds: 3,
          type: 'error'
        })
      else if (password.length > 70 || name.length > 70)
        toast({
          name: 'O número máximo de caracteres é 70 seu porra.',
          seconds: 3,
          type: 'error'
        })
      else if (password !== confirm)
        toast({
          name: 'As senhas não batem porra.',
          seconds: 3,
          type: 'error'
        })
      else {
        axios.post('/signup', {
          password,
          username: name,
        }).then((res) => {
          console.log('then', res)
        }).catch((err) => {
          toast({
            name: err,
            seconds: 3,
            type: 'erro'
          })
        })
      }
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
