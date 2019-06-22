<template>
  <div id="app">
    Hello组件展示在下面：
    <hello :message="msg" class="hello" @click="clickMessage"   :titleColor ="titleColor"/>
    <bag1 :message="msg" class="hello" @click="clickMessage" ></bag1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
      titleColor: '#999'
    }
  }, 
  methods: {
    clickMessage () {
      console.log('你点击了hello组件，message:', this.msg)
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.hello {
  color: rgba(182, 2, 2, 1);
  line-height: 30px;
  font-size: 20px;
  cursor: pointer;
}
</style>
