<template>
  <div>
  <b-navbar toggleable="lg" class='navbar-custom'>
    <img src="https://graacc.org.br/wp-content/uploads/2017/04/GRAACC_logo-1-2.png" class="d-inline-block align-top imagem" alt="graacc">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <h3 class='itens-navbar'>
          <b-nav-item><router-link  class='itens-navbar' to='/'>Home</router-link></b-nav-item>
        </h3>
        <h3 class='itens-navbar'>
          <b-nav-item><router-link class='itens-navbar' to='/emailsender'>Email</router-link></b-nav-item>
        </h3>
        <h3 class='itens-navbar'>
          <b-nav-item><router-link class='itens-navbar' to='/cadastro'>Parceiros</router-link></b-nav-item>
        </h3>
        <h3 class='itens-navbar'>
          <b-nav-item><router-link class='itens-navbar' to='/cadastrotemplete'>Template</router-link></b-nav-item>
        </h3>
        <h3 class='itens-navbar'>
          <b-nav-item><router-link class='itens-navbar' to='/doacoes'>Doações</router-link></b-nav-item>
        </h3>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div class='barra'></div>
</div>

</template>

<script>

export default {

}
</script>

<style scoped>
  .navbar-custom,body {
    background-color: rgba(0, 0, 0, 0.36)
  }
  .itens-navbar{
    color: rgba(255, 255, 255, 0.70) ;
    font-family: $font-family-sans-serif;
    font-weight: $font-weight-bold;
    font-size: 1.4rem;
    text-shadow: 2px  White
  }
  .itens-navbar:hover{
    color:rgba(160, 160, 160, 1.00);
  }
  .barra{
    background-color: #FFC312;
    width: 100%;
    height: 1px;
  }
</style>
