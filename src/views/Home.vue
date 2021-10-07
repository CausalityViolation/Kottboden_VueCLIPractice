<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/piglogo.png">

    <HelloWorld msg="Welcome to Köttboden - Exclusive, Exquisite, Extravagant!"/>

    <div>
      <p>| Merchandise in Stock |</p>

      <ul>
        <li v-for="gris in grisar" v-bind:key="gris.grisNamn">
          | {{ gris.grisNamn }}
          {{ gris.grisLand }}
          {{ gris.grisPris }} |
        </li>
      </ul>
    </div>


  </div>
</template>


<script>
export default {
  name: "Home",
  data: function () {
    return {
      grisar: []
    }
  },
  mounted() {
    fetch('http://127.0.0.1:3030/pigs/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.pigs);
          this.grisar = data.pigs;
        });
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
