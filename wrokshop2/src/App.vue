<template>
  <div id="app">
    <div class="panel panel-default">
      <div class="panel-heading">Task Table</div>
      <table class="table">
        <!-- 表頭 -->
        <thead>
          <tr>
            <th class="number">#</th>
            <th class="name">Task Name</th>
            <th class="duration">Duration</th>
            <th class="status">Status</th>
            <th class="edit"></th>
          </tr>
        </thead>
        <!-- 表頭 -->

        <tbody>
          <tr v-for="d in rows">
            <th class="number" scope="row">{{ $index + 1 }}</th>
            <td>
              <div>{{ d.name }}</div>
              <input v-show="d.isEdit" type="text" v-model="d.name">
            </td>
            <td class="duration">
              <div>{{ d.duration }}</div>
              <input v-show="d.isEdit" type="text" v-model="d.duration">
            </td>
            <td class="status">
              <div>{{ (d.open) ? 'Open' : 'Closed' }}</div>
              <input v-show="d.isEdit" type="checkbox" v-model="d.open">
            </td>
            <td class="edit">
              <button @click="edit(d.id)" class="btn btn-primary">{{ (d.isEdit) ? '完成' : '編輯' }}</button>
              <button @click="del" class="btn btn-danger">刪除</button>
            </td>
          </tr>
        </tbody>

        <!-- 新增用 -->
        <tfoot>
          <tr>
            <th class="number" scope="row">New</th>
            <td>
              <input type="text" v-model="newRows.name">
            </td>
            <td class="duration">
              <input type="text" v-model="newRows.duration">
            </td>
            <td  class="status">
              <div>Open?</div>
              <input type="checkbox" v-model="newRows.open">
            </td>
            <td class="edit">
              <button @click="create" class="btn btn-success">加入</button>
              <button @click="reset" class="btn btn-warning">重置</button>
            </td>
          </tr>
        </tfoot>
        <!-- 新增用 -->
      </table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    reset (){
      this.newRows = { id: '', name: '', duration: 1, open: false, isEdit: false };
      return;
    },
    create (){
      this.newRows.id = new Date().getTime().toString();
      this.rows.push( this.newRows );
      this.reset();
      return;
    },
    edit (id){
      var obj = this.rows.find(function(rows){ return rows.id === id; });
      obj.isEdit = !obj.isEdit;
      return;
    },
    del (id){
      var idx = this.rows.findIndex(function(rows){ return rows.id === id; });
      this.rows.splice(idx, 1);
      return;
    },
  },
  data () {
    return {
      newRows: { id: '', name: '', duration: 1, open: false, isEdit: false },
      rows: [
        { id: '00001', name: '任務 A', duration: 1, open: false, isEdit: false },
        { id: '00002', name: '任務 B', duration: 3, open: false, isEdit: false },
        { id: '00003', name: '任務 C', duration: 6, open: false, isEdit: false }
      ]
    };
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
