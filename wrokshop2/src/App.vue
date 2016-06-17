<template>
  <div id="app">

    <ul class="nav nav-tabs">
      <li @click.prevent="setCurrView('table1')"
          v-bind:class="{'active': (currView === 'table1')}"><a href="#">Table 1</a></li>
      <li @click.prevent="setCurrView('table2')"
          v-bind:class="{'active': (currView === 'table2')}"><a href="#">Table 2</a></li>
      <li @click.prevent="setCurrView('table3')"
          v-bind:class="{'active': (currView === 'table3')}"><a href="#">Table 3</a></li>
    </ul>

    <Panel v-show="(currView === 'table1')" name="Table1" generator="VyUMH45zZ"></Panel>
    <Panel v-show="(currView === 'table2')" name="Table2" generator="4JQVrE5z-"></Panel>
    <Panel v-show="(currView === 'table3')" name="Table3" generator="41fUSN5G-"></Panel>

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
    setCurrView (name){
      this.currView = name;
      return;
    }
  },
  data () {
    return {
      currView: 'table1',
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
