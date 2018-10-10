<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item  border-bottom" v-for="item of recommendList" :key="item.id">    <!--  border-bottom :使每个元素下面有一个1像素的边框（引用的是一像素解决方案里的样式） -->
        <img class="item-image" :src="item.imgUrl"/>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
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
  .item
    margin-top : .1rem
    overflow hidden
    display flex
    height 1.9rem
    .item-image
      width : 1.7rem
      height :1.7rem
      padding : .1rem
      border-radius : .2rem
    .item-info
      flex : 1
      padding : .1rem
      min-width : 0
      .item-title
        line-height : .54rem
        font-size : .32rem
        ellipsis()
      .item-desc
        line-height : .5rem
        color : #a0a0a0
        ellipsis()
      .item-button
        line-height : .5rem
        margin-top : .2rem
        background : #ff9300
        padding : 0  .2rem
        border-radius : .06rem
</style>
