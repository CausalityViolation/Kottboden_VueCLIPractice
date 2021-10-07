<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/piglogo.png">

    <HelloWorld msg="Welcome to Köttboden - Exclusive, Exquisite, Extravagant!"/>

    <div>
      <p>| Merchandise in Stock |</p>

      <ul>
        <li v-for="gris in Grisar" v-bind:key="gris.GrisId">
          | {{ gris.GrisNamn }}
          {{ gris.GrisLand }}
          {{ gris.GrisPris }} |
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  data: function () {

    let currency = "kr";

    return {
      Grisar: [
        {GrisId: 1, GrisNamn: "Gösta", GrisLand: "Sverige", GrisPris: 300 + currency},
        {GrisId: 2, GrisNamn: "Göran", GrisLand: "Sverige", GrisPris: 599 + currency},
        {GrisId: 3, GrisNamn: "Göttans", GrisLand: "Sverige", GrisPris: 234235 + currency},
        {GrisId: 4, GrisNamn: "Götteli", GrisLand: "Sverige", GrisPris: 123123 + currency},
        {GrisId: 5, GrisNamn: "Göttmos", GrisLand: "Sverige", GrisPris: 3458 + currency}
      ]
    }
  }
}
</script>

<style scoped>

h3 {
  margin: 40px 0 0;
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
  color: #375386;
}

</style>
