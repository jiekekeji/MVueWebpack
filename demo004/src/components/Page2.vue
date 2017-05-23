<template>
  <div>
    <ul class="menu">
      <li>
        <router-link to="/page2/content1">菜单1</router-link>
      </li>
      <li>
        <router-link to="/page2/content2">菜单2</router-link>
      </li>
    </ul>

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .menu {
    height: 60px;
    list-style: none;
    background-color: beige;
  }

  .menu > li {
    height: 100%;
    width: 120px;
    float: left;
    border: 1px solid seashell;
  }

  .menu > li > a {
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 60px;
    display: block;
  }
</style>
