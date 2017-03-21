<template>
    <div class="content">
        <ul style="height: auto;width: 100%">
            <li v-for="item in list" style="height: auto;width: 100%;text-align: center;line-height: 50px;background-color: antiquewhite;">
                {{item.id}}
                <ul>
                    <li @click="openTab(chil)" v-for="chil in item.chis" style="height: auto;width: 100%;text-align: center;line-height: 50px;background-color: gainsboro;">
                        {{chil.id}}
                    </li>
                </ul>
            </li>
        </ul>
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
        components: {
        },
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

</style>