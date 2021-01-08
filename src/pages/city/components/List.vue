<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">成都</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">成都</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          A
        </div>
        <div class="item-list">
          <div class="item border-bottom">阿坝藏族羌族自治州</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: "CityList",
  mounted(){
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped>
.border-bottom {
  &:before {
    border-color: #dddddd;
  }
}
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .title {
    line-height: .54rem;
    background: #f5f5f5;
    padding-left: .2rem;
    color: #212121;
    font-size: .26rem;
  }
  .button-list {
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;
    .button-wrapper {
      float: left;
      width: 33.33%;
      .button {
        margin: .1rem;
        padding: .1rem 0;
        text-align: center;
        border: .02rem solid #dddddd;
        border-radius: .06rem;
      }
    }
  }
  .item-list {
    .item {
      line-height: .76rem;
      color: #212121;
      padding-left: .2rem;
    }
  }
}
</style>