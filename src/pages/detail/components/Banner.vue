<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           src="//img1.qunarzz.com/sight/p75/201211/03/c5e69645fb3de0e193835fbb.jpg_600x330_070d35eb.jpg"/>
      <div class="banner-info">
        <div class="banner-title">
          西岭雪山(AAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe64b;</span>
          14
        </div>
      </div>
    </div>
    <common-gallary
        :imgs="imgs"
        v-show="showGallary"
        @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: "DetailBanner",
  data() {
    return{
      showGallary: false,
      imgs:['http://img1.qunarzz.com/sight/p0/2002/9f/9fa5a79fd53d8ddca3.img.jpg_r_800x800_20d93019.jpg', 'http://img1.qunarzz.com/sight/p92/201211/00/d221848112e4d25393835fbb.jpg_r_800x800_fe561c6f.jpg']
    }
  },
  methods:{
    handleBannerClick(){
      this.showGallary = true
    },
    handleGallaryClose(){
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: #ffffff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    .banner-title {
      flex: 1;
      font-size: .32rem;
      padding: 0 .2rem;
    }
    .banner-number {
      height: .32rem;
      padding: 0 .4rem;
      margin-top: .14rem;
      line-height: .32rem;
      border-radius: .2rem;
      background: rgba(0, 0, 0, .8);
      font-size: .24rem;
      .banner-icon {
        font-size: .24rem;
      }
    }
  }
}
</style>