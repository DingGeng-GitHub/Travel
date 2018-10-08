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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
        title: '北京野生动物园',
        desc: '来北京必去的景点非这些地方莫属'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/59/76e0dc86d4416f913d9d919ec79ffe0e.water.jpg_200x200_4f110511.jpg',
        title: '香山公园',
        desc: '深秋时节，红叶漫山遍野，灿烂夺目'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1510/f1/f13797b008eed4d190.img.jpg_200x200_44f2cf08.jpg',
        title: '呀路古热带植物园',
        desc: '山顶满眼彩色，此情此景醉了'
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
