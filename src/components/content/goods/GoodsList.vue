<template>
  <div class="goods">
    <goods-list-item
      v-for="item in goods"
      :goods-item="item"
    />
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      GoodsListItem,
    },
    methods:{

    }
  }
</script>

<style scoped>
.goods {
  display: flex;
  /*flex-wrap 属性规定flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向*/
  /*包括根据宽度一行当中到底显示多少个*/
  flex-wrap: wrap;
  /*justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。*/
  /*space-around:项目位于各行之前、之间、之后都留有空白的容器内*/
  /*将元素元素之间的留白均等分*/
  justify-content: space-around;
  padding: 2px;
}
</style>
