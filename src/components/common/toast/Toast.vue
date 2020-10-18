<template>
  <div class="toast" v-show="isShow">
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      // msg: {
      //   type: String,
      //   default: ''
      // },
      // show: {
      //   type: Boolean,
      //   default: false
      // }

    },
    data() {
      return {
        msg: '',
        isShow:false
      }
    },
    methods: {
      show(msg='默认文字', duration=2000) {
        this.isShow = true;
        this.msg = msg;
        setTimeout(() => {
          this.isShow = false;
          this.msg = '';
        }, duration);
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translate(-50%, -50%);
    z-index: 999;
    padding: 8px 10px;
    border-radius: 5%;
    background-color: rgba(0, 0, 0, .6);
  }
</style>
