let Loading = {};

Loading.install = function (Vue, options) {

    Vue.prototype.$loading = function () {
        console.log("$loading");

        // 1、创建构造器，定义好提示信息的模板
        let loadingEL = Vue.extend({
            template: '<div class="jk-loading">' + options + '</div>'
        });

        // 2、创建实例，挂载到文档
        let el = new loadingEL().$mount().$el;

        //3、创建的实例挂在到body
        document.body.appendChild(el);
    }
}

module.exports = Loading;