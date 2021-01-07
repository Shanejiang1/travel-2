<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
          class="item border-bottom"
          v-for="item of list"
          :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:{
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.title {
  line-height: .8rem;
  background: #f5f5f5;
  text-indent: .2rem;
}
.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 39%;
}
.item-img {
  width: 100%
}
.item-info {
  padding: .1rem;
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

</style>