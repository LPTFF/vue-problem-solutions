<!--  -->
<template>
  <div class="main" @click="test">
    <div>233</div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      test() {
        // ZHE:222
        // Todo
        // ?
        // *
        // ?
        // TODO:
        // !
        /* TODO:2333 */
        console.log('12');
        if (true) {
          console.log('1');
          if (false) {
            console.log('2s1111');
          } else {
            console.log('3s');
          }
          if (true) {
            console.log('233');
          }
        }
      },
    },
    created() { },
    mounted() { },
  };
</script>
<style scoped>
  .main {
    background: red;
  }
</style>