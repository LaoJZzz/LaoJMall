export default {
cartLength(state) {
  //己算所有商品
  return state.cartList.reduce((preValue, item) => {
    return preValue + item.count
  }, 0)
}
, cartList(state) {
    return state.cartList;
  }
  ,
}
