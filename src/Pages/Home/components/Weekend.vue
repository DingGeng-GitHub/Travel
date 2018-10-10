<template>
<div>
  <div class="recommend-title">周末去哪儿</div>
  <ul>
    <li class="item  border-bottom" v-for="item of weekendList" :key="item.id">    <!--  border-bottom :使每个元素下面有一个1像素的边框（引用的是一像素解决方案里的样式） -->
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
  props: {
    weekendList: Array
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
        padding-bottom : 37.09%
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
