<template>

  <body>

  <div>
    <h1>Due to the scarcity and nature of our products, orders are placed via the form below and will be screened
      manually by one of our support agents.
      You will receive a confirmation email when your order has been successfully processed. After which all information
      regarding your purchase will be permanently deleted.</h1>
  </div>
  <br>

  <div>
    <form id="orderForm" class="decor">
      <div class="form-left-decoration"></div>
      <div class="form-right-decoration"></div>
      <div class="circle"></div>
      <div class="form-inner">

        <h1>Contact Us</h1>
        <p>One of our support agents will get back to you as soon as possible!</p>
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <textarea placeholder="Message" rows="10"></textarea>
        <button v-on:click="submitForm($event)" type="submit">Submit</button>
      </div>
    </form>


  </div>
  </body>

</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {

    }

  },
  methods: {
    submitForm() {

      document.getElementById("orderForm").submit();
      document.getElementById("orderForm").reset();

    }
  }
}

</script>


<style scoped>


input, textarea {
  outline: none;
}

body {
  justify-content: center;
  padding: 20px;
}

h1 {
  font-size: 20px;
  margin-top: 0;
  font-weight: 500;
}

form {
  display: flex;
  justify-content: center;
  border-radius: 30px;
  background: #fff;
}

.form-left-decoration,
.form-right-decoration {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 20px;
}

.form-left-decoration {
  bottom: 60px;
  left: -30px;
}

.form-right-decoration {
  top: 60px;
  right: -30px;
}

.form-left-decoration:before,
.form-left-decoration:after,
.form-right-decoration:before,
.form-right-decoration:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 30px;
  background: #fff;
}

.form-left-decoration:before {
  top: -20px;
}

.form-left-decoration:after {
  top: 20px;
  left: 10px;
}

.form-right-decoration:before {
  top: -20px;
  right: 0;
}

.form-right-decoration:after {
  top: 20px;
  right: 10px;
}

.circle {
  position: absolute;
  bottom: 80px;
  left: -55px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
}

.form-inner {
  padding: 40px;
}

.form-inner input,
.form-inner textarea {
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: none;
  border-radius: 20px;
  background: #d0dfe8;
}

.form-inner textarea {
  resize: vertical;
}

button {
  width: 40%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}

button:hover {
  background: #375386;
  cursor: pointer;
}

</style>


