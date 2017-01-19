编程式导航:

一、传值：
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {},
        methods: {
            skip2Page2: function () {
                //注意 这里是$router不是$route，搞了大半天

                //1、直接跳转到Page2
                this.$router.push('Page2');
                //2、按照路由的Path带参数跳转到Page2
                this.$router.push({path: 'Page2', query: {userId: 123456}});
                //3、按照路由的命名跳转
                this.$router.push({name: 'Page2', params: {userId: 123}});
            }
        },
    }
二、取值
    export default {
        name: 'topnav',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                //取值的时候是这个$route

                //1、取路由传递的参数,params的方式传值得取值方式
                userId:this.$route.params.userId,
                //2、path的方式传递过来的取值方式
                userId: this.$route.query.userId,
            }
        },
    }

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo005/preview/123.gif)