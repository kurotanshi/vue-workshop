<template>
  <div>
  <div class="panel panel-default">
    <div class="panel-heading">Task Table: {{name}}</div>
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
        <tr v-for="(d, index) in rows">
          <th class="number" scope="row">{{ index + 1 }}</th>
          <td>
            <div>{{ d.name }}</div>
            <input type="text">
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

    <!-- 頁籤 -->
    <ul v-show="rows.length > 0" class="pagination" style="margin-left: 1em;">
      <li v-bind:class="{'disabled': (currPage === 1)}"
          @click.prevent="setPage(currPage-1)">
          <a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>

      <li v-for="n in totalPage"
          v-bind:class="{'active': (currPage === (n))}"
          @click.prevent="setPage(n+1)">
            <a href="#">{{ n }}</a></li>

      <li v-bind:class="{'disabled': (currPage === totalPage)}"
          @click.prevent="setPage(currPage+1)">
          <a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>

    </ul>
  </div>
</template>


<script>
export default {
  props:{
    name: String,
    generator: String
  },
  methods: {
    fetchData (){
      var _this = this;

      // GET request
      _this
        .$http({
          url: 'http://beta.json-generator.com/api/json/get/' + _this.generator,
          method: 'GET'
        })
        .then(function(res){
          // success
          _this.rows = res.data;
        }, function(res){
          // error
          console.log( res );
        });

    },
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

    setPage (idx){
      if( idx <= 0 || idx > this.totalPage ){ return; }
      this.currPage = idx;
    },

  },
  computed:{
    pageStart: function(){
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage: function(){
      return Math.ceil(this.rows.length/this.countOfPage);
    }
  },
  data () {
    return {
      rows: [],
      countOfPage: 5,   // 單頁筆數
      currPage: 1,      // 目前頁數
      newRows: { id: '', name: '', duration: 1, open: false, isEdit: false },
    };
  },
  created (){
    this.fetchData();
  }
};
</script>

<style></style>