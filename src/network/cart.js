export class Order {
  constructor(topImages,goods,iid) {
    this.image = topImages[0];
    this.title = goods.title;
    this.desc = goods.desc;
    this.price = goods.nowPrice;
    this.iid = iid;
    //商品默认不选中
    this.checked = false;
  }
}
