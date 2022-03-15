// components/Tabs/Tabs.js
Component({
    /**
     * 组件的初始数据
     */
    data: {
        mengban: 0,
        titlearray: ['', '', '', ''],/** 搜索选项标题 */
        cdiqu: '',/** 地区选中标题*/
        cdiquindex: 0,/** 地区选中索引 */
        cjiage: '',/** 价格选中标题 */
        cjiageindex: 0,/** 价格选中索引 */
        showarray: [/** 展示某个搜索栏 */
            0, 0, 0, 0
        ],
        homeListItemFd: [
            {
                id: '1',
                zd: '1',
                img: '../../assets/home/homeListItem/01.png',
                title: '海港广场，精装标准套三出售，带家具家电靠地铁',
                stmel: '芙蓉区',
                stmels: '长房东立',
                number: '700000',
                specifications: '2室1厅',
                squaremeter: '67.7',
                homesuper: '精装修',
                avatar: '../../assets/home/Headportrait/s01.png',
                type: '个人'
            },
            {
                id: '2',
                img: '../../assets/home/homeListItem/02.png',
                title: '中心广场中心.领包入住，精装修房东直租',
                stmel: '开福区',
                stmels: '宽属大厦',
                number: '900000',
                specifications: '3室1厅',
                squaremeter: '77.7',
                homesuper: '精装修',
                avatar: '../../assets/home/Headportrait/s02.png',
                type: '个人'
            },
            {
                id: '3',
                img: '../../assets/home/homeListItem/03.png',
                title: '南儿街顶楼地段好地铁房双林小学 带花园',
                stmel: '梅溪湖',
                stmels: '鼎奥国际',
                number: '1450000',
                specifications: '2室',
                squaremeter: '127.7',
                homesuper: '精装修',
                avatar: '../../assets/home/Headportrait/s03.png',
                type: '个人'
            },
            {
                id: '4',
                img: '../../assets/home/homeListItem/04.png',
                title: '溪岛精装套三，靠地铁',
                stmel: '长沙县',
                stmels: '小遂溪岛',
                number: '900000',
                specifications: '3室1厅',
                homesuper: '精装修',
                squaremeter: '57.7',
                avatar: '../../assets/home/Headportrait/s04.png',
                type: '个人'
            }
        ],
        homeListItemYx: [
            {
                id: '1',
                zd: '1',
                img: '../../../assets/home/homeListItem/1231.jpg',
                title: '海港广场，精装标准套三出售，带家具家电靠地铁',
                stmel: '芙蓉区',
                stmels: '长房东立',
                number: '700000',
                specifications: '2室1厅',
                squaremeter: '67.7',
                homesuper: '精装修',
                avatar: '../../assets/home/Headportrait/s01.png',
                type: '个人'
            },
            {
                id: '2',
                img: '../../../assets/home/homeListItem/1231.jpg',
                title: '中心广场中心.领包入住，精装修房东直租',
                stmel: '开福区',
                stmels: '宽属大厦',
                number: '900000',
                specifications: '3室1厅',
                squaremeter: '77.7',
                homesuper: '精装修',
                avatar: '../../assets/home/Headportrait/s02.png',
                type: '个人'
            },
            {
                id: '3',
                img: '../../../assets/home/homeListItem/1231.jpg',
                title: '南儿街顶楼地段好地铁房双林小学 带花园',
                stmel: '梅溪湖',
                stmels: '鼎奥国际',
                number: '1450000',
                specifications: '2室',
                squaremeter: '127.7',
                homesuper: '精装修',
                avatar: '../../assets/home/Headportrait/s03.png',
                type: '个人'
            },
            {
                id: '4',
                img: '../../../assets/home/homeListItem/1231.jpg',
                title: '溪岛精装套三，靠地铁',
                stmel: '长沙县',
                stmels: '小遂溪岛',
                number: '900000',
                specifications: '3室1厅',
                homesuper: '精装修',
                squaremeter: '57.7',
                avatar: '../../assets/home/Headportrait/s04.png',
                type: '个人'
            }
        ],
        currentInexs: 0,
        currentInex: 0,
        selectInex: 0,
        dropList: [
            {
                id: 1,
                // img: "/img/bottom/up.png",
                title: "区域"
            },
            {
                id: 2,
                // img: "/img/bottom/up.png",
                title: "佣金"
            }
        ],
        /**房东直租数据接口 */
        diqu: [
            '全部',
            '东湖区',
            '西湖区',
            '青云谱区',
            '青山湖区',
            '湾里区',
            '新建区'
        ],
        jiage: [
            '佣金升序',
            '佣金降序'
        ]
    },

    onLoad: function (options) {
        if (options.id == null) {
            options.id = 0;
        }
        this.setData({
            currentInexs: options.id,
        })
    },
    methods: {
        onTaps: function (e) {
            var nums = e.currentTarget.dataset.index;
            /**更新赋值 setData() */
            this.setData({
                showarray: [0, 0, 0, 0],
                mengban: '0',
                titlearray: ['', '', '', ''],
                currentInexs: nums,
                /**数据源赋值 */
            });
            console.log(this.data.currentInexs)
        },
        /**导航标题联动 e是什么？log打印看看*/
        selectToggle: function (e) {
            var num = e.currentTarget.dataset.index;
            this.setData({
                showarray: [0, 0, 0, 0],
                mengban: 1
            });
            if (num == 0) {
                this.setData({
                    showarray: [1, 0, 0, 0]
                })
            } else if (num == 1) {
                this.setData({
                    showarray: [0, 1, 0, 0]
                })
            } else if (num == 2) {
                this.setData({
                    showarray: [0, 0, 1, 0]
                })
            } else if (num == 3) {
                this.setData({
                    showarray: [0, 0, 0, 1]
                })
            };
            console.log(this.data.showarray);

            /**更新赋值 setData() */
            this.setData({
                currentInex: num
            })
        },
        /**选项选中 */
        select: function (e) {
            var num = e.currentTarget.dataset.index;
            var type = e.currentTarget.dataset.type;
            if (type == 0) {
                this.setData({
                    cdiquindex: num,
                })
            } else if (type == 1) {
                this.setData({
                    cjiageindex: num,
                })
            } 
        },
        /*区域地区确定 */
        diquok: function (e) {
            this.setData({
                mengban: 0,
                cdiqu: this.data.diqu[this.data.cdiquindex]
            })
            this.setData({
                titlearray: [this.data.cdiqu, this.data.cjiage, this.data.chuxing, this.data.cmianji],
                showarray: [0, 0, 0, 0]
            })
        },
        /**佣金确定 */
        jiageok: function (e) {
            this.setData({
                mengban: 0,
                cjiage: this.data.jiage[this.data.cjiageindex],
            })
            this.setData({
                titlearray: [this.data.cdiqu, this.data.cjiage, this.data.chuxing,
                this.data.cmianji],
                showarray: [0, 0, 0, 0]
            })
        },
    }
})
