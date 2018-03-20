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
         imgSrc: "../../images/tea2.jpg"
       }
    ],
    teaArray: [
      {
        aId: "list0",
        listArr: [
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId: 0,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          }

        ]
      },
      {
        aId: "list1",
        listArr: [
          {
            teaName: '鲜奶抹茶',
            imgSrc: '../../images/tea3.jpg',
            moneyCode: "￥",
            money: 17,
            sizeId: 0,
            star: '*',
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          },
          {
            teaName: '柠檬绿',
            moneyCode: "￥",
            imgSrc: '../../images/tea1.jpg',
            money: 17,
            star: '*',
            sizeId: 1,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          },
          {
            teaName: '烧仙草',
            moneyCode: "￥",
            imgSrc: '../../images/tea2.jpg',
            money: 17,
            star: '*',
            sizeId: 2,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          },
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId: 3,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          },
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId: 4,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          },
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId: 5,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          },
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId: 6,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          },
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId: 7,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          }
        ]
      },
      {
        aId: "list2",
        listArr: [
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId: 0,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          },
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId: 1,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          }
        ]
      },
      {
        aId: "list3",
        listArr: [
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId: 0,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          },
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId: 1,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          }

        ]
      },
      {
        aId: "list4",
        listArr: [
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId: 0,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          },
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId: 1,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          }
        ]
      },
      {
        aId: "list5",
        listArr: [
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId:0,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          },
          {
            teaName: '鲜花抹茶',
            moneyCode: "￥",
            imgSrc: '../../images/tea4.jpg',
            money: 17,
            star: '*',
            sizeId: 1,
            sizeArr: [
              {
                cupZize: '大杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '中杯',
                del: '-',
                num: 0,
                add: '+'
              },
              {
                cupZize: '小杯',
                del: '-',
                num: 0,
                add: '+'
              }
            ]
          }

        ]
      },
    ],
    toView:"eeq",
    crlTure:false,            // 无控制
    ifIndex:0,                //控制左边导航样式,
    carts: [],                // 购物车列表
    hasList: false,           // 列表是否有数据
    totalPrice: 0,            // 总价，初始为0
    totalDetail:false,        //显示总价详情和蒙版
    numTotal:0,               //显示总数目
    priceCar:false,           //购物车的显示
    detailTetx:"详情名字",      //价格详情的名字 
    detailPrice: 0,            //价格详情的价格
    detailNum:0,                //价格详情的数目
  },

  jumpTo:function(e){         //跳转到具体的值
    // 获取标签元素上自定义的 data-opt 属性的值
    let target = e.currentTarget.dataset.opt;
    this.setData({
      toView: target,
      crlTure:true,
      ifIndex: target.split("t")[1]
    })
  },


  // //计算总价
  // getTotalPrice() {
  //   let carts = this.data.carts;                  // 获取购物车列表
  //   let total = 0;
  //   for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
  //     if (carts[i].selected) {                   // 判断选中才会计算价格
  //       total += carts[i].num * carts[i].price;     // 所有价格加起来
  //     }
  //   }
  //   this.setData({                                // 最后赋值到data中渲染到页面
  //     carts: carts,
  //     totalPrice: total.toFixed(2)
  //   });
  // },




  //计算总的数量
  getTotalPrice() {
    let that = this;
    let teaArray = this.data.teaArray;                                     // 获取数据列表
    let numTotal = 0, totalPrice = 0;
    for (let i = 0; i < teaArray.length; i++) {                            // 循环列表得到每个数据   第一层遍历
      for (let j = 0; j < teaArray[i].listArr.length; j++) {               //循环列表得到每个数据   第二层遍历
        for (let k = 0; k < teaArray[i].listArr[j].sizeArr.length; k++) {  //循环列表得到每个数据   第三层遍历
         numTotal += teaArray[i].listArr[j].sizeArr[k].num;                //进行总额相加
         totalPrice += teaArray[i].listArr[j].sizeArr[k].num * teaArray[i].listArr[j].money    // 假设价格一致
        // totalPrice += teaArray[i].listArr[j].sizeArr[k].num * teaArray[i].listArr[j].sizeArr[k].money    // 不一致时候需要更改数据
        }
      }
    }
    // console.log(totalPrice) 
    if (numTotal == 0){                                                     //当总数为0时候   隐藏购物车
      that.setData({   
        priceCar: false
      })
    }else{
      that.setData({ 
        priceCar: true
      })
    }
    that.setData({                                                         // 最后赋值到data中渲染到页面
      numTotal: numTotal,                                                  //总数量
      totalPrice: totalPrice.toFixed(2)                                    //总价格
    });
  },

  showDetail:function(){                                                   //点击蒙版时候让总价详情隐藏
    let that = this;
    if (that.data.totalDetail){
      that.setData({
        totalDetail:false
      })
    }
  },
  

  // 增加数量
  addCount(e) {                                              //分别获取所有数组的index值  
    const index = e.currentTarget.dataset.index, i = e.currentTarget.dataset.lis.split("t")[1], j = e.currentTarget.dataset.lit;
    let teaArray = this.data.teaArray;                       //获取到数据
    let num = teaArray[i].listArr[j].sizeArr[index].num;     //获取具体杯型的数量
    console.log(teaArray[i].listArr[j].sizeArr[index]);
    console.log(teaArray[i].listArr[j])
    num = num + 1;                                           //添加数量
    teaArray[i].listArr[j].sizeArr[index].num = num;         //赋值给具体杯型的数量
    this.setData({
      teaArray: teaArray                                     //重新更新数据
    });
    this.getTotalPrice();                                    //无论添加还是减少都要调用总价的方法
  },
  // 减少数量
  minusCount(e) {                                           //具体看添加数量的注释  同理
    const index = e.currentTarget.dataset.index, i = e.currentTarget.dataset.lis.split('t')[1], j = e.currentTarget.dataset.lit;
    let teaArray = this.data.teaArray;
    let num = teaArray[i].listArr[j].sizeArr[index].num;
    if (num < 1) {
      return false;
    }
    num = num - 1;
    teaArray[i].listArr[j].sizeArr[index].num = num;
    this.setData({
      teaArray: teaArray
    });
    this.getTotalPrice();
  },
  //显示具体详情总价
  jumpTotal:function(e){
    let that = this;
    if(this.data.totalDetail){
      that.setData({
        totalDetail: false
      })
    }else{
      that.setData({
        totalDetail: true
      })
    }
  }
  ,
  onLoad: function () {
 
  },

  onShow:function(){
    this.setData({
      hasList: true,        // 既然有数据了，那设为true吧
    })
  }

})
