<template>
  <Preloader />
  <div class="parent">
    <!-- Quotes -->
    <div class="quotes">
        <div class="quote">
            <font-awesome-icon icon="fa-solid fa-quote-left"/>
            <font-awesome-icon icon="fa-solid fa-quote-right" class="mb-3"/>
            <h3 v-for="quote in quotes" :key="quote.id" class="mt-2">{{ quote.content }}</h3>
        </div>
        <h6 v-for="quote in quotes" :key="quote.id">{{ quote.author }}</h6>
        <small v-for="quote in quotes" :key="quote.id">{{ quote.dateAdded }}</small>
        <!-- Share -->
        <div class="share d-flex justify-content-evenly mt-4">
          <!-- social -->
          <div class="social d-flex align-items-center gap-3">
            <!-- Copy -->
            <div class="copy">
                <font-awesome-icon icon="fa-solid fa-clipboard" class="icon copy" style="font-size:25px" @click="copy"/>
            </div>
            <!-- twitter -->
            <div class="twitter">
                <font-awesome-icon icon="fa-brands fa-twitter" class="icon twitter" style="font-size:25px" @click="share"/>
            </div>
            <!-- facebook -->
            <div class="facebook">
                <font-awesome-icon icon="fa-brands fa-facebook" class="icon facebook" style="font-size:25px" @click="shareOnFacebook"/>
            </div>
          </div>
          <button type="button" @click="generate">Quote</button>
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
    },
    shareOnFacebook() {

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
}
small{
  font-size: 10px;
}
h3{
  font-weight: bolder;
}
h6{
  font-weight: lighter;
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
button{
  padding: 10px;
  border-radius: 5px;
  background-color: #000;
  color:#fff;
  flex: .5;
}
.icon{
  cursor: pointer;
  transition: all .3s;
  color:#000;
}
.facebook:hover{
  color:#1877f2
}
.twitter:hover{
  color:#1DA1F2
}
</style>