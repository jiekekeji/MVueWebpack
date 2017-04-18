<template>
  <div>
    <div>
      <button @click="requstData1()">正常请求</button>
    </div>
    <div>
      <button @click="requstData2()">发起跨域请求</button>
    </div>
    <div style="margin-top: 40px;padding: 20px">
      <p>{{msg}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: ""
      }
    },
    methods: {
      requstData1(){
        this.$http.get('http://www.tngou.net/tnfs/api/list').then(response => {
          this.msg = response.body;
        }, response => {
        });
      },
      requstData2(){
        this.$http.get("/api"+"/tnfs/api/list").then(response => {
          this.msg = response.body;
        }, response => {
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
