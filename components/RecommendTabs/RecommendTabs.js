// components/RecommendTabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabs:Array,
        // value:[]
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 点击tabs事件
        handleItemTabs(e){
             console.log('点击tabs事件'+JSON.stringify(e.currentTarget.dataset))
             const {index} = e.currentTarget.dataset;
             this.triggerEvent("tabsItemChange",{index})
        }
    }
})
