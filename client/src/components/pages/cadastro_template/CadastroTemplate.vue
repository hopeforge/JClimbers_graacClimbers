<template>
  <div>
    <appNavBar></appNavBar>
    <h3 class="titulo">Cadastro de Templete</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label-for="input-1"
      >
      
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Titulo do Template"
        ></b-form-input>
      </b-form-group>

      <b-form-textarea
            id="textarea-rows"
            placeholder="Corpo do Template"
            rows="8"
        ></b-form-textarea>

      <b-button type="submit" variant="success">Salvar</b-button>
      <b-button type="reset" variant="danger">Apagar</b-button>
    </b-form>
  </div>
</template>

<script>
import NavBar from '../../shared/navbar_tools/NavBarTools.vue'

export default {
    components: {
        appNavBar : NavBar
    },
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
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

.containerTemplate {
    padding-top: 15px;   
}

.btn {
    margin-bottom: 5px;
}

.titulo {
    background-color: rgb(187, 187, 238);
    text-align: center;
}

</style>