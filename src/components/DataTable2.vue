<template>
    <DataTable
      :columns="columns"
      :data="data"
      :class="myClass"
      width="100%"
    />
</template>

<script>
// import $ from 'jquery'
import DataTable from 'datatables.net-vue3'

export default {
  name: 'MyDataTable',
  props: ['columns', 'data', 'myClass'],
  components: {
    DataTable
  },
  mounted () {
  }
}

</script>
