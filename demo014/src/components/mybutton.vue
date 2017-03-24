<template>
    <div class="container" :class="selectClasses">
        <slot>Default</slot>
    </div>
</template>

<script>
    export default{
        data(){
            return {}
        },
        props: {
            type: ""
        },
        components: {},
        computed: {
            selectClasses(){
                var clz = "btn-default";
                switch (this.type) {
                    case "success":
                        clz = "btn-success";
                        break;
                    case "warning":
                        clz = "btn-warning";
                        break;
                    case "error":
                        clz = "btn-error";
                        break;
                }
                return clz;
            }
        },
        methods: {},
        created () {
        },
    }
</script>
<style scoped>
    .container {
        height: 40px;
        width: 200px;
        border-radius: 10px;
        text-align: center;
        line-height: 40px;

    }

    .container:active {
        background-color: ghostwhite;
    }

    .btn-default {
        background-color: aliceblue;
    }

    .btn-success {
        background-color: #13CE66;
    }

    .btn-warning {
        background-color: #F7BA2A;
    }

    .btn-error {
        background-color: #FF4949;
    }


</style>