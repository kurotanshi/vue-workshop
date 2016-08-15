<template>
  <div id="app">

    <button @click="addNewTable" class="btn btn-primary addNewTable">Add New Table</button>

    <ul class="nav nav-tabs">
      <li v-for="tbl in panels"
          @click.prevent="setCurrView(tbl.ref)"
          v-bind:class="{'active': (currView === tbl.ref)}"><a href="#">{{ tbl.name }}</a></li>
    </ul>

    <div v-for="tbl in panels">
      <Panel v-show="(currView === tbl.ref)" :name="tbl.name" :generator="tbl.generator"></Panel>
    </div>

  </div>
</template>

<script>
import Panel from './Panel.vue'

export default {
  components: { Panel },
  methods: {
    setCurrView (name){
      this.currView = name;
      return;
    },
    addNewTable(){
      // this.$children.length = Panel 組件數
      var idx = this.$children.length + 1;

      var name = window.prompt("輸入新表單標題", "");
      name = name || 'unnamed-table ' + idx;

      var tbl =  {
        name: name,
        rows: [],
        ref: '_table' + idx,
        generator: '',
        isCurr: false
      };

      this.panels.push(tbl);
    }
  },
  data () {
    return {
      currView: 'table1',
      panels: [
        { name: 'Table1', rows: [], generator: 'VyUMH45zZ', ref: 'table1', isCurr: false },
        { name: 'Table2', rows: [], generator: '4JQVrE5z-', ref: 'table2', isCurr: false },
        { name: 'Table3', rows: [], generator: '41fUSN5G-', ref: 'table3', isCurr: false },
      ]
    };
  }
};
</script>


<style>
#app{
  width: 980px; margin: 10px;
}
.nav-tabs{ margin-bottom: 1em; }

.addNewTable{ margin-bottom: 1em; }

body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}
thead{
  font-size: 16px; font-weight: 900;
}
</style>
