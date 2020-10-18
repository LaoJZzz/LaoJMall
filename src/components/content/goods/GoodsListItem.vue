<template>
  <div class="goods-item" @click="itemClick">
    <img
      v-lazy="showImage" alt=""
      @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return null;
        }
      }
    },
    computed:{
      //通过计算属性来实现不同数据的读取方式
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imageLoad() {
        //  发出事件
        this.$bus.$emit("itemImageLoad")
      //判断当前是通过home路由进入的还是detail路由进入
      //   if (this.$route.path.indexOf('/home')) {
      //     this.$bus.$emit("homeItemImageLoad")
      //   }else if (this.$route.indexOf('/detail')) {
      //     this.$bus.$emit("detailItemImageLoad")
      //   }
        // console.log(this.$bus);
      },
      itemClick() { //监听商品点击
        this.$router.push('/detail/' + this.goodsItem.iid);
        // this.$router.push({
        //   path:'/detail',
        //   query:{
        //
        //   }
        // })
      }
    }

  }
</script>

<style scoped>
  .goods-item {
    /*padding-bottom: 40px;为了给底部的文字信息留出空间*/
    padding-bottom: 40px;
    /*子绝父相*/
    position: relative;

    width: 49%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    /*直接定位到底部*/
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    /* text-overflow: ellipsis;文字多出部分省略*/
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
