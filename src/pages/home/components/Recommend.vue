<template>
  <div>
    <div class="title">热门榜单</div>
    <ul>
      <li
                   class="item border-bottom"
                   v-for="item of list"
                   :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <p class="item-price">{{item.price}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-top: .2rem;
  line-height: .8rem;
  background: #edeff2;
  text-indent: .2rem;
}
.item {
  overflow: hidden;
  display: flex;
  height: 2.2rem;
  .item-img {
    width: 2rem;
    padding: .1rem;
  }
  .item-info {
    flex: 1;
    padding: .1rem;
    min-width: 0;
  }
  .item-title {
    line-height: .54rem;
    font-size: .32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-desc {
    line-height: .4rem;
    color: #666666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-price{
    margin-top: .16rem;
    line-height: .54rem;
    font-size: .32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>