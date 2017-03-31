var loading = {

    //显示提示信息
    show: function (element) {

        //1、如果未添加元素，添加元素
        let container = element;
        if (typeof  container === "undefined" || null === container) {
            return;
        }
        element.style.position = "relative";
        //2、判断是否已添加过
        let loadingPrarents = document.getElementsByClassName("jk-loading-container");
        let loadingPrarent = loadingPrarents[0];
        if (typeof  loadingPrarent !== "undefined" && null !== loadingPrarent) {
            loadingPrarent.style.display = "block";
            return loadingPrarent;
        }

        //3、添加元素

        //添加父级元素
        loadingPrarent = document.createElement('div');
        loadingPrarent.className = "jk-loading-container";
        container.appendChild(loadingPrarent);
        //添加loading图片父级
        let loadingDiv = document.createElement('div');
        loadingPrarent.appendChild(loadingDiv);

        //添加loading图片
        let loading = document.createElement('div');
        loadingDiv.appendChild(loading);
        return loadingPrarent;
    },

    //关闭加载提示
    hide: function (loadingPrarent) {
        if (typeof  loadingPrarent !== "undefined" && null !== loadingPrarent) {
            loadingPrarent.style.display = "none";
        }
    }
}

export {loading};