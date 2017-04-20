<!--顶部的导航条-->
<template>
    <div class="nav-top">
        <ul class="top-menu">
            <li>
                <router-link to="/homepage/contenttopnav1">灰色组件</router-link>
            </li>
            <li>
                <router-link to="/homepage/contenttopnav2">淡绿色组件</router-link>
            </li>
        </ul>
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
    .nav-top {
        width: 100%;
        height: auto;
        background-color: lightgray;
    }

    .top-menu {
        list-style: none;
        height: 60px;
        width: 1240px;
        margin: 0 auto;
    }

    .top-menu > li {
        text-align: center;
        line-height: 60px;
        width: 120px;
        height: 60px;
        float: left;
    }
</style>
