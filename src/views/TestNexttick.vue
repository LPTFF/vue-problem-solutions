<template>
  <div class="hello">
    <div class="test">2444</div>
    <div>
      <div></div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Element from 'element-ui';
  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
    },
  };
</script>

<style scoped>
  .test {
    font-size: 100px;
    background: red;
  }
</style>