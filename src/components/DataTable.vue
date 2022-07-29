<template>
    <div>
        <h1>Title</h1>

        <table class="table table-hover table-bordered" id="example">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in dataSource" :key="entry.id">
                    <td>{{entry.id}}</td>
                    <td>{{entry.name}}</td>
                    <td>{{entry.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  props: ['dataSource'],
  mounted () {
    $('#example').DataTable()
  }
}

</script>
