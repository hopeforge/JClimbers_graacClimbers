<template>
  <div>
    <appNavBar></appNavBar>
    <h3 class="titulo">Cadastro usuário</h3>
    <b-form class="form">
      <b-form-group label="Nome">
        <b-form-input v-model="user.nome" type="text"></b-form-input>
      </b-form-group>

      <b-form-group label="Email">
        <b-form-input v-model="user.email"></b-form-input>
      </b-form-group>

      <b-form-group label="Usuario" >
        <b-form-input v-model="user.usuario"></b-form-input>
      </b-form-group>

      <b-form-group label="Senha">
        <b-form-input type="password" v-model="user.password"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Salvar</b-button>
      <b-button @click="onReset" type="reset" variant="danger">Cancelar</b-button>
      <button  @click="onSubmit" >Teste</button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
import NavBar from '../../shared/navbar_tools/NavBarTools.vue';
  export default {
    components: {
      appNavBar : NavBar
    },
    data() {
      return {
        users:[],
        user: {
          email: '',
          nome: '',
          usuario: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit () {
        var formData = {
          nome: this.user.nome,
          usuario: this.user.usuario,
          password: this.user.password,
          email: this.user.email
        }
        // eslint-disable-next-line no-console
        console.log(formData)
        axios.post('http://localhost:3000/users.json', formData)
        // eslint-disable-next-line no-console
        .then(res =>console.log(res))
        // eslint-disable-next-line no-console
        .catch(error => console.log(error))

      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.parceiro.nomeFantasia = ''
        this.parceiro.razaoSocial = ''
        this.parceiro.urlSite = ''
        this.parceiro.nomeResponsavel = ''
        this.parceiro.contatoResponsavel = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>



<style scoped>
.form{
  padding: 15px, 15px, 15px, 15px;
}

.titulo {
    background-color: rgb(187, 187, 238);
    text-align: center;
}
</style>
