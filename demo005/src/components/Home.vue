<template>
    <div class="container">
        <h3 class="page-title">这是Home.vue组件</h3>
        <div class="area">
            <p>1、声明式导航</p>
            <ul>
                <li>
                    <router-link to="/page1">跳转到Page1组件不带参数</router-link>
                </li>
                <li>
                    <router-link to="/page2?msg=声明式导航传值">跳转到Page2组件携带参数msg1</router-link>
                </li>
                <li>
                    <input placeholder="参数msg的值" v-model="param1"/>
                    <router-link :to="path1">跳转到Page3组件携带参数msg1</router-link>
                </li>
            </ul>
        </div>
        <div class="area">
            <p>2、编程式导航：按路由的命名</p>
            <ul>
                <li>
                    <a @click="navByName(1)">跳转到Page1组件不带参数</a>
                </li>
                <li>
                    <a @click="navByName(2)">跳转到Page2组件携带参数msg2</a>
                </li>
                <li>
                    <input placeholder="参数msg的值" v-model="param2"/>
                    <a @click="navByName(3)">跳转到Page3组件携带参数msg2</a>
                </li>
            </ul>
        </div>
        <div class="area">
            <p>3、编程式导航：按路由的路径</p>
            <ul>
                <li>
                    <a @click="navByPath(1)">跳转到Page1组件不带参数</a>
                </li>
                <li>
                    <a @click="navByPath(2)">跳转到Page2组件携带参数msg3</a>
                </li>
                <li>
                    <input placeholder="参数msg的值" v-model="param3"/>
                    <a @click="navByPath(3)">跳转到Page3组件携带参数msg3</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                path1: "/page3",
                param1: "",
                param2: "默认值",
                param3: "路径导航"
            }
        },
        components: {},
        watch: {
            param1: function () {
                this.path1 = "/page3?msg1=" + this.param1;
            }
        },
        methods: {
            /**
             * 按照路由的命名导航
             * 路由配置的文件：name属性
             * {
                    path: '/page1',
                    name: 'page1',
                    component: Page1,
                },
             * @param index
             */
            navByName: function (index) {
                switch (index) {
                    case 1:
                        this.$router.push({name: 'page1'});
                        break;
                    case 2:
                        this.$router.push({name: 'page2', params: {msg2: this.param2}});
                        break;
                    case 3:
                        let obj = {param2: index, name: this.param2};
                        this.$router.push({name: 'page3', params: {msg2: obj}});
                        break;

                }
            },

            /**
             * 按照路由的路径导航
             * 路由配置的文件：path属性
             * {
                    path: '/page1',
                    name: 'page1',
                    component: Page1,
                },
             * @param index
             */
            navByPath: function (index) {
                switch (index) {
                    case 1:
                        this.$router.push({path: '/page1'});
                        break;
                    case 2:
                        this.$router.push({path: '/page2', query: {msg3: this.param3}});
                        break;
                    case 3:
                        let obj = {param3: index, name: this.param3};
                        this.$router.push({path: '/page3', query: {msg3: obj}});
                        break;

                }
            },
        },
    }
</script>
<style scoped>
    .container {
        height: auto;
        width: 100%;
        overflow: hidden;
    }

    .page-title {
        background-color: blanchedalmond;
        padding: 10px;
    }

    .area {
        background-color: lightgray;
    }

    .area > ul > li {
        list-style: none;
        width: auto;
        height: auto;
        margin-left: 20px;
        border: 1px solid green;
        display: inline-block;
    }

    .area-1 > ul > li > a {
        width: auto;
        height: auto;
        padding: 10px;
        text-decoration: none;
    }
</style>