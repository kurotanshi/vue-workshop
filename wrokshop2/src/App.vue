<template>
  <div id="app">
    <Panel></Panel>
  </div>
</template>

<script>
import Panel from './Panel.vue'

export default {
  components: { Panel },
  methods: {

  },
  data () {
    return { };
  }
};
</script>


<style>
#app{
  width: 980px; margin: 10px;
}
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}
thead{
  font-size: 16px; font-weight: 900;
}
</style>
