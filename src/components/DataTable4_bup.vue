<template>
    <DataTable
      :columns="columns"
      :data="data"
      class="display"
      width="100%"
    />
</template>

<script>
// import $ from 'jquery'
import axios from 'axios'
import DataTable from 'datatables.net-vue3'

export default {
  name: 'MyDataTable',
  data () {
    return {
      data: [],
      data2: [],
      columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'email' }
      ]
    }
  },
  components: {
    DataTable
  },
  methods: {
    async getUsers () {
      this.data = [
        {
          id: 1,
          name: 'Tiger Nixon',
          email: 'tiger@typicode.com'
        },
        {
          id: 2,
          name: 'Garrett Winters',
          email: 'tiger@typicode.com'
        }
      ]
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
      console.log('DATA1', this.data)

      this.data = response.data
      console.log('DATA2', this.data2)
    }
  },
  mounted () {
    this.getUsers()
  }
}

</script>
