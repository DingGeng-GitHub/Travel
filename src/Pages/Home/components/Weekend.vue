<template>
<div>
  <div class="recommend-title">周末去哪儿</div>
  <ul>
    <li class="item  border-bottom" v-for="item of recommendList" :key="item.id">    <!--  border-bottom :使每个元素下面有一个1像素的边框（引用的是一像素解决方案里的样式） -->
      <div class="item-img-wapper">
        <img class="item-image" :src="item.imgUrl"/>
      </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ec/902725c4d56517.jpg_r_640x214_7a74d251.jpg',
        title: '羊城民俗风情游',
        desc: '品味羊城文化，感受羊城别样风情'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/6f/bf9ef732f8ad2e.jpg_r_640x214_c759559e.jpg',
        title: '宝贝亲子游乐地',
        desc: '宝贝闲不住，我们去哪儿呀'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/50/07fa9343791682.jpg_r_640x214_c8c3d798.jpg',
        title: '自然户外好去处',
        desc: '快快来到户外，感受花城的魅力'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        margin-top : .2rem
        line-height : .8rem
        background : #eee
        text-indent : .2rem
    .item-img-wapper
        overflow : hidden
        height : 0
        padding-bottom : 33.9%
        .item-image
            width : 100%
    .item-info
        padding : .1rem
        .item-title
            line-height : .54rem
            font-size : .32rem
            ellipsis()
        .item-desc
            margin-bottom : .1rem
            line-height : .5rem
            color : #a0a0a0
            ellipsis()

</style>
