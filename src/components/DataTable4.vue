<template>
    <DataTable
      :columns="columns"
      :data="data"
      class="display cell-border"
      width="100%"
      :options="options"
      @change="addButtEvList"
    />
</template>

<script>
// import $ from 'jquery'
import axios from 'axios'
import '@/assets/lib/fontawesome-free/css/all.min.css'
import DataTable from 'datatables.net-vue3'

export default {
  name: 'MyDataTable',
  data () {
    return {
      data: [],
      data2: [],
      options: {
        responsive: true,
        autoWidth: false,
        destroy: true,
        deferRender: true
      },
      columns: [
        { data: 'id', title: 'ID', width: '10%' },
        { data: 'name', title: 'Name', width: '40%', className: 'dt-body-left' },
        { data: 'email', title: 'Email', width: '30%' },
        {
          data: null,
          title: 'Action',
          wrap: true,
          width: '20%',
          render: function () {
            let buttons = '<a https="#" class="edit btn btn-warning btn-xs btn-flat"><i class="fas fa-edit"></i></a> '
            buttons += '<a https="#" class="delete btn btn-danger btn-xs btn-flat"><i class="fas fa-trash-alt"></i></a>'
            return buttons
          }
        }
      ]
    }
  },
  components: {
    DataTable
  },
  methods: {
    async getUsers () {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
      this.data = response.data
    },
    editItem (index) {
      console.log('editar item:', index)
    },
    deleteItem (index) {
      console.log('eliminar item:', index)
    },
    addButtEvList () {
      const edButtons = document.getElementsByClassName('edit')
      const delButtons = document.getElementsByClassName('delete')

      for (let i = 0; i < edButtons.length; i++) {
        edButtons[i].addEventListener('click', e => this.editItem(i))
      }

      for (let i = 0; i < delButtons.length; i++) {
        delButtons[i].addEventListener('click', e => this.deleteItem(i))
      }
    }
  },
  mounted () {
    console.log('mounted')
    this.getUsers().then(() => {
      this.addButtEvList()
    })
  }
}

</script>
