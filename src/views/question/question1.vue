<!--  -->
<template>
  <div class="">
    <div class="app">
      <div class="title">这是标题头</div>
      <div id="player" class="player"></div>
      <div id="menu" class="menu"></div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        dataTest: '',
        replaceFlag: true,
        urlImg: '',
      };
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      testMethods() {
        console.log('2333');
        let call = '';
        console.log('🚀 ~ file: question1.vue ~ line 29 ~ testMethods ~ call', call);
        let webSDK = new window.ByteLiveWebSDK({
          activityId: 1718382357986328,
          token: 'yKoRKM',
          service: 'liveDemo',
          mode: 1,
          modules: [
            {
              id: 'player', // 接入方页面内的元素ID, 视频模块会嵌入到此元素内
              mode: 'player',
            },
            {
              id: 'menu', // 接入方页面内的元素ID, 菜单栏模块会嵌入到此元素内
              mode: 'menu'
            }
          ],
          options: {
            mobileBackgroundTransparent: true,
            saveUserInfo: true,
          }
        });
        webSDK.on('error', console.log);
      },
      styleSet() {
        document.body.style.setProperty('--innerHeight', `${window.innerHeight}px`);
        document.body.style.setProperty('font-size', '10px');
        document.body.style.setProperty('margin', '0');
        // document.body.style.setProperty('background-color', '#080B12');
        document.body.style.setProperty('height', 'var(--innerHeight, 100vh)');
        document.body.style.setProperty('overflow', 'hidden');
      }
    },
    created() { },
    mounted() {
      this.testMethods();
      this.styleSet();
    },
  };
</script>
<style scoped>
  .app {
    display: flex;
    height: 100%;
    flex-direction: column;
    background-image: url('//p6-live.byteimg.com/tos-cn-i-gjr78lqtd0/923a9e572712a19d5b8c84fa66e90bd6.png~tplv-gjr78lqtd0-image.image');
    background-size: 100% 100%;
    background-attachment: fixed;
    position: absolute;
    bottom: 0;
    top: 0;
  }

  .player {
    width: 100vw;
    height: calc(100vw / 16 * 9);
  }

  .menu {
    flex: 1 1;
    overflow: scroll;
  }

  .title {
    background-color: #efc14e;
  }
</style>