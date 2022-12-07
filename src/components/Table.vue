<template>
  <table >
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Class</th>
      <th>Math</th>
      <th>Literature</th>
      <th>English</th>
      <th>Button</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="row in rows" :key="row.id">
      <td>{{row.id}}</td>
      <td>{{row.name}}</td>
      <td>{{row.class}}</td>
      <td>{{row.math}}</td>
      <td>{{row.literature}}</td>
      <td>{{row.english}}</td>
      <td><router-link to="/edit"><button>edit</button></router-link></td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default{
    props: {
      rows:{
        type: Array,
        required: true
      }
    }
}
</script>

<style scoped>
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  margin: 10px 10px 0 10px;
}
table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}
table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #858585;
}
table td:last-child {
  border-right: none;
  text-align: center;
}
table tbody tr:nth-child(2n) td {
  background: #dbdbdb;
}
table button{
width: 50px;
height: 30px;
}
</style>