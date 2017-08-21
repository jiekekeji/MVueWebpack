<template>
  <div class="container">
    <p>{{msg}}</p>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {},
    watch: {},
    computed:{},
    activated(){
    },
    beforeRouteLeave (to, from, next) {
      next();
    },
    methods: {
      //发送登录请求
      send2Login(){
        var _this = this
        let pswd = "" + _this.phoneNum + _this.password + _this.phoneNum + _this.password;
        pswd = md5(pswd);
        var paras = {
          action: 'sf_user_login',
          phone: _this.phoneNum,
          password: pswd
        }
        $.ajax({
          url: api.APPURL + '/sf',
          data: paras,
          type: 'post',
          async: true,
          success: function (data) {
            Indicator.close()
            data = eval('(' + data + ')');
            if (data.result === "ok") {
              console.log(data)
            } else {
            }
          },
          error: function (data) {
          }
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/scss">
  .container {
    p {
      color: red;
    }
  }
</style>
