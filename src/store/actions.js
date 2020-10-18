//导入常量
import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutaions-types'

export default {
  addCart(context, payload) {
    //payload添加的商品
    // for (let item of context.state.cartList) {
    //   //判断下一次传入的商品是否已经存在
    //   if (item.iid === payload.iid) {
    //     //用一个变量来接收相同的商品
    //     oldOrder = item;
    //   }
    // }
    return new Promise((resolve,reject)=>{
      let oldOrder = context.state.cartList.find(item => item.iid === payload.iid);
      //查找之前的数组中是否已经存在相同的商品
      // 2.判断oldProduct是否有值
      if (oldOrder) {
        //如果商品已经存在则加一
        // oldOrder.count += 1;
        context.commit(ADD_COUNTER, oldOrder);
        resolve('当前商品数量加+1');
      } else {
        //商品类型+1
        //如果商品之前不存在则直接payload添加到数组
        payload.count = 1;
        // context.state.cartList.push(payload);
        context.commit(ADD_TO_CART, payload);
        resolve('添加了新的商品');
      }
    })

  }
}
