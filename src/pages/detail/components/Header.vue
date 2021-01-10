<template>
  <div>
    <router-link
        tag="div"
        to="/"
        class="header-abs"
        v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>

    <router-link
        tag="div"
        to="/"
        class="header-fixed"
        v-show="!showAbs"
        :style="opacityStyle"
    >
        <div class="iconfont header-fixed-back">&#xe624;
        </div>
      景点详情
    </router-link>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop || window.pageYOfset || document.body.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.show = true
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
.header-abs {
  position: absolute;
  left: .2rem;
  top: .2rem;
  width: .8rem;
  height: .8rem;
  line-height: .8rem;
  border-radius: .4rem;
  text-align: center;
  background: rgba(0, 0, 0, .8);
  .header-abs-back {
    color: #ffffff;
    font-size: .4rem;
  }
}
.header-fixed {
  z-index: 2;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  height: .86rem;
  line-height: .86rem;
  text-align: center;
  color: #ffffff;
  background: #00bcd4;
  font-size: .32rem;
  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: .64rem;
    text-align: center;
    font-size: .4rem;
    color: #ffffff;
  }
}
</style>