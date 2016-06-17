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
          <tr>
            <th class="number" scope="row">1</th>
            <td>
              <div>Name</div>
              <input type="text">
            </td>
            <td class="duration">
              <div>123</div>
              <input type="text">
            </td>
            <td class="status">
              <div>Open</div>
              <input type="checkbox">
            </td>
            <td class="edit">
              <button class="btn btn-primary">編輯</button>
              <button class="btn btn-danger">刪除</button>
            </td>
          </tr>
        </tbody>

        <!-- 新增用 -->
        <tfoot>
          <tr>
            <th class="number" scope="row">新增</th>
            <td>
              <input type="text">
            </td>
            <td class="duration">
              <input type="text">
            </td>
            <td  class="status">
              <div>Open?</div>
              <input type="checkbox">
            </td>
            <td class="edit">
              <button class="btn btn-success">加入</button>
              <button class="btn btn-warning">重置</button>
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

    },
    edit (){

    },
    del (){

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
