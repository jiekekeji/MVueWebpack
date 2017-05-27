<template>
    <div class="content">
        <ul>
            <li v-for="item in list" style="background-color: antiquewhite;">
                <span>{{item.id}}</span>
                <ul>
                    <li @click="openTab(chil)" v-for="chil in item.chis" style="background-color: gainsboro;">
                        <span>{{chil.id}}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <router-link to="/page2">数组分组的演示</router-link>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                list: [
                    {
                        id: 1,
                        chis: [
                            {
                                id: 11,
                            },
                            {
                                id: 12,
                            },
                            {
                                id: 13,
                            }
                        ]

                    },
                    {
                        id: 2,
                        chis: [
                            {
                                id: 21,
                            },
                            {
                                id: 22,
                            },
                            {
                                id: 23,
                            }
                        ]
                    },
                    {
                        id: 3,
                        chis: [
                            {
                                id: 31,
                            },
                            {
                                id: 32,
                            },
                            {
                                id: 33,
                            }
                        ]
                    }
                ]
            }
        },
        components: {},
        computed: {},
        methods: {
            openTab(){
                window.open();
            }
        },
        created () {
        },
    }
</script>
<style scoped>
    ul {
        list-style: none;
        height: auto;
        width: 100%;

    }

    li {
        list-style: none;
        height: auto;
        width: 100%;
        text-align: center;
        line-height: 50px;
    }
</style>