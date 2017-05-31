import Vue from "vue"

Vue.directive('imgLoad', {

    bind: function (el, binding, vnode, oldVnode) {

        //1、初始状态下，让img的背景图为我们绑定的背景binding.value
        el.style.backgroundImage = "url('" + binding.value.loading + "')";
        el.style.backgroundRepeat = "no-repeat";
        el.style.backgroundPosition = "center";

        //2、注册onload事件，加载完成后把背景图片设为无
        el.onload = function () {
            el.style.backgroundImage = "url('')";
            console.log("onload");
        }

        //3、注册onerror事件，出错时显示指定的错误图片
        el.onerror = function () {
            el.setAttribute("src", binding.value.error);
            console.log("onerror");
        }
    },

    inserted: function (el, binding, vnode, oldVnode) {
    },

    update: function (el, binding, vnode, oldVnode) {
    },

    componentUpdated: function (el, binding, vnode, oldVnode) {
    },

    unbind: function (el, binding, vnode, oldVnode) {
    }
});
