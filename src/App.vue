<template>
  <div class="parent">
    <!-- Quotes -->
    <div class="quotes">
        <div class="quote">
            <font-awesome-icon icon="fa-solid fa-quote-left"/>
            <font-awesome-icon icon="fa-solid fa-quote-right" class="mb-3"/>
            <p v-for="quote in quotes" :key="quote.id" class="mt-2">{{ quote.content }}</p>
        </div>
        <h6 v-for="quote in quotes" :key="quote.id">{{ quote.author }}</h6>
        <small v-for="quote in quotes" :key="quote.id">{{ quote.dateAdded }}</small>
        <!-- Share -->
        <div class="share d-flex">
          <!-- social -->
          <div class="social">
            <!-- Copy -->
            <div class="copy">

            </div>
            <!-- twitter -->
          </div>
          <button type="button" @click="generate">Quote</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      quotes: []
    }
  },
  mounted() {
    this.generate();
  },
  methods: {
    generate() {
      axios.get("http://api.quotable.io/random")
        .then((data => this.quotes = data))
    }
 }
}
</script>

<style scoped>
.quotes {
  background-color: #fff;
  border-radius: 8px; 
  box-shadow: 0px 0px 100px rgba(0,0,0,.1);
  padding: 20px;
  align-self: center;
  text-align: center;
}
small{
  font-size: 10px;
}
p{
  font-weight: bolder;
}
h6{
  font-weight: lighter;
}
.parent{
  width:40%;
  height: 80vh;
  margin:auto;
  display: grid;
  grid-template-rows: minmax(100px,1fr);
}
@media screen and (max-width:767px){
  .parent{
    width:80%;
  }
}
button{
  padding: 10px;
  border-radius: 5px;
  background-color: #000;
  color:#fff;
  flex:1;
}
</style>