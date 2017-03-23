export default{
    install(Vue, options){

        initView();

        //添加实例属性
        Vue.prototype.$about = "jk-dialog";

        //添加实例方法:1、显示
        Vue.prototype.show = (tx, confireFn, cancelFn) => {
            //1、获取目标元素
            let container = document.getElementById("jk-dialog-prompt");

            let showDiv = document.getElementsByClassName("jk-dialog-show")[0];
            if (typeof  showDiv !== "undefined") {
                return;
            }
            //2、移除隐藏样式，添加显示样式
            let reg = new RegExp("(\\s|^)" + 'jk-dialog-hide' + "(\\s|$)");
            container.className = container.className.replace(reg, " ");
            container.className = "jk-dialog-show";

            //3、添加显示样式内容
            //3.1、标题
            let titleDiv = document.createElement("div");
            titleDiv.className = "jk-dialog-title";
            titleDiv.appendChild(document.createTextNode("提示:"));
            container.appendChild(titleDiv);


            //3.2、内容
            let descDiv = document.createElement("div");
            descDiv.className = "jk-dialog-notice";
            descDiv.appendChild(document.createTextNode(tx))
            container.appendChild(descDiv);

            //3.3、按钮
            let optionDiv = document.createElement("div");
            optionDiv.className = "jk-dialog-option";
            container.appendChild(optionDiv);

            //3.4 取消按钮
            let cancelDiv = document.createElement("div");
            optionDiv.appendChild(cancelDiv);
            let cancelTv = document.createTextNode("取消");
            cancelDiv.appendChild(cancelTv);
            cancelDiv.onclick = cancelFn;

            //3.5 确认按钮
            let confireDiv = document.createElement("div");
            optionDiv.appendChild(confireDiv);
            let confireTv = document.createTextNode("确认");
            confireDiv.appendChild(confireTv);
            confireDiv.onclick = confireFn;
        };

        //添加实例方法:2、隐藏
        Vue.prototype.hide = () => {
            let container = document.getElementById('jk-dialog-prompt');

            let reg = new RegExp("(\\s|^)" + 'jk-dialog-show' + "(\\s|$)");
            container.className = container.className.replace(reg, " ");
            container.className = "jk-dialog-hide";
            while (container.hasChildNodes()) {
                container.removeChild(container.firstChild);
            }

        };

        //初始化视图
        function initView() {
            //对话框顶级元素
            let container = document.createElement("div");
            container.id = "jk-dialog-prompt"
            container.className = "jk-dialog-hide";
            document.body.appendChild(container);
        }
    },

}