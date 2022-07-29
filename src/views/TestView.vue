<template>
  <DataTable
  :dataSource="dataSource" />
</template>

<script>
import axios from 'axios'
import DataTable from '@/components/DataTable.vue'

export default {
  name: 'TestView',
  data () {
    return {
      dataSource: []
    }
  },
  components: {
    DataTable
  },
  methods: {
    async getUsers () {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
      this.dataSource = response.data
    }
  },
  mounted () {
    this.getUsers()
  }
}

</script>
