<template>
  <div class="vue--fragment">
    <h2 class="h5 mb-4">テキストからSQLを作成</h2>
    <div class="row mb-4">
      <div class="col-6 btn-group d-flex">
        <select-sql></select-sql>
        <insert-sql></insert-sql>
        <delete-sql></delete-sql>
        <update-sql></update-sql>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex stack">
        <table-name-input></table-name-input>
        <table-update-value-textarea></table-update-value-textarea>
        <table-value-textarea></table-value-textarea>
      </div>
      <div class="col">
        <result></result>
      </div>
    </div>
  </div>
</template>

<script>
import SelectSql from './SelectSql.vue';
import InsertSql from './InsertSql.vue';
import DeleteSql from './DeleteSql.vue';
import UpdateSql from './UpdateSql.vue';
import TableNameInput from './TableNameInput.vue';
import TableUpdateValueTextarea from './TableUpdateValueTextarea.vue';
import TableValueTextarea from './TableValueTextarea.vue';
import Result from './Result.vue';

export default {
  components: {
    'select-sql': SelectSql,
    'insert-sql': InsertSql,
    'delete-sql': DeleteSql,
    'update-sql': UpdateSql,
    'table-name-input': TableNameInput,
    'table-update-value-textarea': TableUpdateValueTextarea,
    'table-value-textarea': TableValueTextarea,
    'result': Result,
  },
};
</script>

<style>
dl {
  margin-bottom: 0;
}
.stack {
  flex-direction: column;
}
</style>
