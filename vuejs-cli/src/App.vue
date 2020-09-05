<template>
  <div id="app">
    <div class="container">
      <!-- Login-->
      <div class="row">
          <p class="jumbotron">
              Login: <input type="text" v-model="user"/>
              Vous êtes connecté en tant que {{user}}
          </p>
      </div>

      <!--Commandes-->
      <h1 class="display-4" v-if="commandes.length > 0">Produits commandés</h1>
      <div class="row">
        <FicheProduit v-for="commande in commandes" v-bind:nom="commande" v-on:commande-passee="commander" v-bind:key="'commande'+commande" role="recap">
        </FicheProduit>
      </div>

      <!-- Catalog de produits-->
      <h1 v-bind:class="affichage">Produits disponibles</h1>
      <div class="row">
        <FicheProduit v-for="produit in produits" v-bind:nom="produit" v-on:commande_passee="commander" v-bind:key="'produit'+produit" role="commande">
        </FicheProduit>
      </div>
  </div>
    <router-view/>
  </div>
</template>

<script>
import FicheProduit from './components/FicheProduit'
export default {
  name: 'App',
  components: { FicheProduit },
  data: function () {
    return {
      user: 'Bertrand',
      produits: ['Pizza', 'Hamburger', 'Cheeseburger', 'Tacos'],
      commandes: [],
      affichage: 'display-4'
    }
  },
  methods: {
    commander: function (produit) {
      this.commandes.push(produit)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
