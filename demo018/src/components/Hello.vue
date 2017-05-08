<template>
  <div class="hello">

    <div class="box-upload">
      <input id="upload-input" @change="handleFileChange" ref="inputer" type="file"/>
      <label for="upload-input">选择文件</label>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      handleFileChange (e) {
        let inputDOM = this.$refs.inputer;
        // 通过DOM取文件数据
        this.file = inputDOM.files[0];
        this.errText = '';

        console.log("file", inputDOM.files[0]);

        let size = Math.floor(this.file.size / 1024);

        // 触发这个组件对象的input事件
        this.$emit('input', this.file);

        // 这里就可以获取到文件的名字了
        this.fileName = this.file.name;

        // 这里加个回调也是可以的
        this.onChange && this.onChange(this.file, inputDOM.value);

      },
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .box-upload {
    height: 80px;
    width: 160px;
    background-color: lightblue;
    position: relative;
  }

  .box-upload > label {
    position: absolute;
    top: 0;
    display: block;
    height: 80px;
    width: 160px;
    background-color: lavenderblush;
    line-height: 80px;
  }

  .box-upload > input {
    height: 0px;
    width: 0px;
  }

</style>
