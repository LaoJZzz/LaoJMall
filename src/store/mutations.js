//导入常量
import {
  ADD_COUNTER,
   ADD_TO_CART
} from './mutaions-types'

export default {
  //数量加一
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload);
  }
}
