<template>
  <div class="banner">
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
</template>

<script>
export default {
  name: "DetailBanner"
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