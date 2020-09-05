<template>
 <div class="col-3">
      <p class="jumbotron">{{nom}} <br/>
          <button v-on:click="passer_commande(nom)" v-if="role == 'commande' ">
              Commander
          </button>
      </p>
  </div>
</template>

<script>
export default {
  name: 'FicheProduit',
  props: ['nom', 'role'],
  methods: {
    passer_commande: function (produit) {
      this.$emit('commande_passee', produit)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
