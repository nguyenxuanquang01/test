<template>
  <div class="home">
    <Talbe :rows="rows"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Talbe from '@/components/Table.vue'

export default {
  name: 'HomeView',
  components: {
    Talbe
  },
  data() {
    return {
      rows: [
        {
          id: 1,
          name: "Nguyễn Văn A",
          class: "12A",
          math: "10",
          literature:"6",
          english:"8"
        },
        {
          id: 2,
          name: "Nguyễn Văn B",
          class: "11A",
          math: "6",
          literature:"9",
          english:"7"
        }
      ]
    };
  }
}
</script>
