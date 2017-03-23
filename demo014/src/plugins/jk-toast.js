var toast = {

    //显示提示信息
    show: function (tx) {

        //设置1秒后自动关闭
        setTimeout(function () {
            toast.hide();
        }, 1 * 1000);

        //1、如果未添加元素，添加元素
        let container = document.getElementById("jk-toast");
        if (typeof  container === "undefined" || null === container) {
            //未添加
            container = document.createElement('div');
            container.id = "jk-toast";
            container.className = "jk-toast-show";
            container.appendChild(document.createTextNode(tx))
            document.body.appendChild(container);
            return;
        }

        //2、如果已添加过元素，那么切换样式
        let reg = new RegExp("(\\s|^)" + 'jk-toast-hide' + "(\\s|$)");
        container.className = container.className.replace(reg, " ");
        container.className = "jk-toast-show";
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
        container.appendChild(document.createTextNode(tx));

    },

    //关闭提示信息
    hide: function () {
        let container = document.getElementById("jk-toast");
        if (typeof  container === "undefined") {
            return;
        }
        let reg = new RegExp("(\\s|^)" + 'jk-toast-show' + "(\\s|$)");
        container.className = container.className.replace(reg, " ");
        container.className = "jk-toast-hide";
    }
}

export {toast};