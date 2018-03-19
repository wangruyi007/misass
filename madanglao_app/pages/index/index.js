//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
 
    zise_big: true,
    zise_middle:false,
    zise_small:false,
    char_lt:">",
    array:[
      {
        name:"新品推荐",
        imgSrc:"../../images/tea3.jpg"
      },
       {
         name: "星厨系列",
         imgSrc: "../../images/tea3.jpg"
      },
       {
         name: "经典套餐",
         imgSrc: "../../images/tea3.jpg"
       },
       {
         name: "开心儿童套餐",
         imgSrc: "../../images/tea3.jpg"
       },
       {
         name: "小食甜品",
         imgSrc: "../../images/tea3.jpg"
       },
       {
         name: "主食",
         imgSrc: "../../images/tea3.jpg"
       }
    ],
    teaArray:[
      {
        teaName:'鲜奶抹茶',
        imgSrc:'../../images/tea3.jpg',
        moneyCode:"￥",
        money:17,
        qi:"起",
        star:'*',
        sizeArr:[
          {
            cupZize:'大杯',
            del:'-',
            num:'0',
            add:'+'
          },
            {
            cupZize: '中杯',
            del: '-',
            num: '0',
            add: '+'
          },
           {
            cupZize: '小杯',
            del: '-',
            num: '0',
            add: '+'
          }
        ]
      },
      {
        teaName: '柠檬绿',
        moneyCode: "￥",
        imgSrc: '../../images/tea1.jpg',
        money: 17,
        qi: "起",
        star: '*',
        sizeArr: [
          {
            cupZize: '大杯',
            del: '-',
            num: '0',
            add: '+'
          },
          {
            cupZize: '中杯',
            del: '-',
            num: '0',
            add: '+'
          },
          {
            cupZize: '小杯',
            del: '-',
            num: '0',
            add: '+'
          }
        ]
      },
      {
        teaName: '烧仙草',
        moneyCode: "￥",
        imgSrc: '../../images/tea2.jpg',
        money: 17,
        qi: "起",
        star: '*',
        sizeArr: [
          {
            cupZize: '大杯',
            del: '-',
            num: '0',
            add: '+'
          },
          {
            cupZize: '中杯',
            del: '-',
            num: '0',
            add: '+'
          },
          {
            cupZize: '小杯',
            del: '-',
            num: '0',
            add: '+'
          }
        ]
      },
      {
        teaName: '鲜花抹茶',
        moneyCode: "￥",
        imgSrc: '../../images/tea4.jpg',
        money: 17,
        qi: "起",
        star: '*',
        sizeArr: [
          {
            cupZize: '大杯',
            del: '-',
            num: '0',
            add: '+'
          },
          {
            cupZize: '中杯',
            del: '-',
            num: '0',
            add: '+'
          },
          {
            cupZize: '小杯',
            del: '-',
            num: '0',
            add: '+'
          }
        ]
      },
      {
        teaName: '鲜花抹茶',
        moneyCode: "￥",
        imgSrc: '../../images/tea4.jpg',
        money: 17,
        qi: "起",
        star: '*',
        sizeArr: [
          {
            cupZize: '大杯',
            del: '-',
            num: '0',
            add: '+'
          },
          {
            cupZize: '中杯',
            del: '-',
            num: '0',
            add: '+'
          },
          {
            cupZize: '小杯',
            del: '-',
            num: '0',
            add: '+'
          }
        ]
      },
       {
        teaName: '鲜花抹茶',
        moneyCode: "￥",
        imgSrc: '../../images/tea4.jpg',
        money: 17,
        qi: "起",
        star: '*',
        sizeArr: [
          {
            cupZize: '大杯',
            del: '-',
            num: '0',
            add: '+'
          },
          {
            cupZize: '中杯',
            del: '-',
            num: '0',
            add: '+'
          },
          {
            cupZize: '小杯',
            del: '-',
            num: '0',
            add: '+'
          }
        ]
      },
       {
         teaName: '鲜花抹茶',
         moneyCode: "￥",
         imgSrc: '../../images/tea4.jpg',
         money: 17,
         qi: "起",
         star: '*',
         sizeArr: [
           {
             cupZize: '大杯',
             del: '-',
             num: '0',
             add: '+'
           },
           {
             cupZize: '中杯',
             del: '-',
             num: '0',
             add: '+'
           },
           {
             cupZize: '小杯',
             del: '-',
             num: '0',
             add: '+'
           }
         ]
       },
       {
         teaName: '鲜花抹茶',
         moneyCode: "￥",
         imgSrc: '../../images/tea4.jpg',
         money: 17,
         qi: "起",
         star: '*',
         sizeArr: [
           {
             cupZize: '大杯',
             del: '-',
             num: '0',
             add: '+'
           },
           {
             cupZize: '中杯',
             del: '-',
             num: '0',
             add: '+'
           },
           {
             cupZize: '小杯',
             del: '-',
             num: '0',
             add: '+'
           }
         ]
       }
    ],
    toView:"eeq",
    crlTure:false, // 无控制
    ifIndex:0     //控制左边导航样式
  },

  jumpTo:function(e){
    // 获取标签元素上自定义的 data-opt 属性的值
    // let dataArr = ["list0", "list1", "list2", "list3", "list4", "list5", "list6", "list7]
    let target = e.currentTarget.dataset.opt;
    // for( let i=0;i<dataArr.length;i++){
    //   if (dataArr[i] ==target ){
    //     this.setData({
         
    //     })
    //   }
    // }
    this.setData({
      toView: target,
      crlTure:true,
      ifIndex: target.split("t")[1]
    })
  },
  



  onLoad: function () {
 
  },

})
