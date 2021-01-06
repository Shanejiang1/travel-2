<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination:'.swiper-pagination',
        loop:true
      },
      swiperList:[{
        id:'0001',
        imgUrl:'//imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg'
      },{
        id:'0002',
        imgUrl:'//imgs.qunarzz.com/vs_ceph_vcimg/f7813c9431796cc32ae7b7a78447342e.jpeg'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eeeeee;
}
.swiper-img {
  width: 100%;
}
</style>