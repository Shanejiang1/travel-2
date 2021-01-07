<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon"
             v-for="item of page"
             :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://gw.alicdn.com/tfs/TB1MW5KdQ9l0K4jSZFKXXXFjpXa-180-180.png_.webp',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'https://gw.alicdn.com/tfs/TB1CeUmM.Y1gK0jSZFCXXcwqXXa-180-180.png_.webp',
        desc: '一日游'
      }, {
        id: '0003',
        imgUrl: 'https://gw.alicdn.com/tfs/TB1hMsPdGNj0u4jSZFyXXXgMVXa-180-180.png_.webp',
        desc: '跟团游'
      }, {
        id: '0004',
        imgUrl: 'https://gw.alicdn.com/tfs/TB12H3hM2b2gK0jSZK9XXaEgFXa-180-180.png_.webp',
        desc: '定制游'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/vc/fd/55/94/6c7152c2a8b35a9c49bb26ea25.png_92.png',
        desc: '主题游'
      }, {
        id: '0006',
        imgUrl: 'https://imgs.qunarzz.com/vc/eb/d9/1b/e24bca3f1ef6ae6ebdee15e4ca.png_92.png',
        desc: '徒步登山'
      }, {
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/vc/c3/f2/54/2e1c8f9403de1ed28895c9ffa4.png_92.png',
        desc: '全家出游'
      }, {
        id: '0008',
        imgUrl: 'https://imgs.qunarzz.com/vc/68/4a/91/b7f09964d1e7a6280cca361c46.png_92.png',
        desc: '休闲潜水'
      }]
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
.icons {
  > .swiper-container {
    height: 0;
    padding-bottom: 50%;
  }
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
  }
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .44rem;
    box-sizing: border-box;
    padding: .1rem;
  }
  .icon-img-content {
    display: block;
    margin: 0 auto;
    height: 100%;
  }
  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    color: #333333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>