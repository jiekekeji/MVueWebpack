<template>
<<<<<<< HEAD
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
=======
    <div id="app">
        <!--路由出口-->
        <router-view></router-view>
        <page2></page2>
    </div>
</template>

<script>
    import Page2 from './components/Page2'
    export default {
        name: 'app',
        components: {
            Page2
        }
    }


</script>

<style>
    /*引入重置样式*/
    @import "assets/style/reset.css";

    .menu {
        height: 120px;
        width: 100%;
        background-color: rosybrown;

    }

    .menu > a {
        display: inline-block;
        height: 120px;
        width: 120px;
        text-align: center;
        line-height: 120px;
        border-right: 1px solid gray;
    }

>>>>>>> origin/master
</style>
