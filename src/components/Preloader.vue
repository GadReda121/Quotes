<template>
    <div class="preloader" v-show="show">
        <img src="../../public/preloader.svg" alt="Preloader" />
    </div>
</template>

<script>
export default {
    name: "Preloader",
    data() {
        return {
            show: true
        }
     },
    mounted() {
        this.preloader();
    },
    methods: {
        preloader() {
            setTimeout(() => {
                this.show = false;
            }, 1000);
        }
    }
}
</script>

<style scoped>
.preloader{
    background-color: #f1f2f3;
    width: 100%;
    height: 100vh;
    position: fixed;
    display: grid;
    justify-content: center;
    align-items: center;
}
img{
    width: 50%;
    justify-self: center;   
}
</style>