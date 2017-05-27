vue-分组和多层循环 v-for
--------------------

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo012/preview/012.gif)

1、数据格式和模板

```
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
```

 2、对数组分组的形式
 
```
     <div class="item-container" v-for="item in spileCitys">
        <div class="item" v-for="child in item">{{child}}</div>
     </div>
    
     data () {
        return {
            citys: ['法国', '澳大利亚', '智利', '新西兰', '西班牙', '加拿大', '波多黎各', '英国'],
        }
     },
     computed: {
        spileCitys(){
            var result = [];
            for (var i = 0, len = this.citys.length; i < len; i += 3) {
                result.push(this.citys.slice(i, i + 3));
            }
            return result;
        }
     },
```