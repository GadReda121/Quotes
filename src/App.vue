<template>
  <Preloader />
  <div class="parent">
    <!-- Quotes -->
    <div class="quotes">
        <!-- Icon & Content -->
        <div class="quote">
            <font-awesome-icon icon="fa-solid fa-quote-right" class="quoteIcon" />
            <h3 v-for="quote in quotes" :key="quote.id" class="mt-3">{{ quote.content }}</h3>
        </div>
        <!-- Author Name -->
        <h6 v-for="quote in quotes" :key="quote.id">{{ quote.author }}</h6>
        <!-- Date -->
        <small v-for="quote in quotes" :key="quote.id">{{ quote.dateAdded }}</small>
        <!-- Share -->
        <div class="share d-flex justify-content-evenly mt-4">
          <!-- social -->
          <div class="social d-flex align-items-center gap-3">
            <!-- Copy -->
            <div class="copy">
                <font-awesome-icon icon="fa-solid fa-clipboard" class="icon copy" style="font-size:25px" @click="copy" title="Clip To Clipboard" />
            </div>
          </div>
          <!-- BTN => Quote -->
          <button type="button" @click="generate">{{ Quote }}</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2';
import Preloader from './components/Preloader.vue';

export default {
  components: { Preloader },
  data() {
    return {
      quotes: [],
      Quote : "Quote"
    }
  },
  mounted() {
    this.generate();
  },
  methods: {
    generate() {
      axios.get("http://api.quotable.io/random")
        .then((data => this.quotes = data))
    },
    copy() {
      let h3 = document.querySelector("h3");
      navigator.clipboard.writeText(h3.firstChild.textContent);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Text Copied'
      })
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
  position: relative;
}
.quotes::before{
  content: '';
  background-color: #000;
  width: 5px;
  height:100%;
  position: absolute;
  left:0;
  top:0;
  border-radius: 8px 0px 0px 8px;
}
small{
  font-size: 10px;
  position: relative;
}
h6{
  font-weight: lighter;
} 
h3{
  font-weight: bolder;
}
.parent{
  width:40%;
  height: 100vh;
  margin:auto;
  display: grid;
}
@media screen and (max-width:767px){
  .parent{
    width:80%;
  }
}
@media screen and (min-width:768px) and (max-width:991px){
  .parent{
    width:60%;
  }
}
button{
  padding: 10px;
  border-radius: 5px;
  background-color: #000;
  color:#fff;
  flex: .8;
}
.quoteIcon{
  font-size: 40px;
  color: #fff;
  background-color: #000;
  padding: 20px 23px;
  border-radius: 50px;
  margin-top: -100px;
  box-shadow: 0px -5px 100px rgba(0,0,0,.1);
  position: relative;
}
.icon{
  cursor: pointer;
  transition: all .3s;
  color:#000;
}
</style>