<template>
  <MyDataTable
  :columns="columns"
  :data="data"
  myClass="display"
  width="100%"
/>
</template>

<script>
import axios from 'axios'
import MyDataTable from '@/components/DataTable2.vue'

export default {
  name: 'TestView',
  data () {
    return {
      columns: ['id', 'name', 'email'],
      data: []
    }
  },
  components: {
    MyDataTable
  },
  methods: {
    async getUsers () {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
      this.data = response.data
      console.log(this.data)
    }
  },
  mounted () {
    this.getUsers()
  }
}

</script>
