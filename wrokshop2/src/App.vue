<template>
  <div id="app">

    <ul class="nav nav-tabs">
      <li><a href="#">Table 1</a></li>
      <li><a href="#">Table 2</a></li>
    </ul>

    <Panel name="Table1" :rows="row1"></Panel>
    <Panel name="Table2" :rows="row2"></Panel>
  </div>
</template>

<script>
import Panel from './Panel.vue'

var row1 = [
  { id: '00001', name: '任務 A', duration: 1, open: false, isEdit: false },
  { id: '00002', name: '任務 B', duration: 3, open: true,  isEdit: false },
  { id: '00003', name: '任務 C', duration: 6, open: false, isEdit: false }
];

var row2 = [
  { id: '00004', name: '任務 X', duration: 3, open: true, isEdit: false },
  { id: '00005', name: '任務 Y', duration: 4, open: false, isEdit: false },
  { id: '00006', name: '任務 Z', duration: 5, open: false, isEdit: false }
];

export default {
  components: { Panel },
  methods: {

  },
  data () {
    return {
      row1: row1,
      row2: row2,
    };
  }
};
</script>


<style>
#app{
  width: 980px; margin: 10px;
}
.nav-tabs{
  margin-bottom: 1em;
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
