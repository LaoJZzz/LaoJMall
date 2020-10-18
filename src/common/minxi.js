// 混入
import {debounce} from "./utils"
import BackTop from "../components/content/backTop/BackTop";
export const itemListenerMixin={
  data() {
    return {
      itemImgListener: null,
      refresh:null
    }
  },
  mounted() {
    //1.防抖操作
    this.refresh = debounce(this.$refs.scroll.refresh, 200);
    //监听图片加载完
    this.itemImgListener = () => {
     this.refresh()
    };
    this.$bus.$on('itemImaLoad', this.itemImgListener);
  }
}

export  const  backTopMixin={
  components:{
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods:{

    //返回顶部
    backClick() {
      // scrollTo(0, 0,500);第三个参数设置返回速度
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  }
}
