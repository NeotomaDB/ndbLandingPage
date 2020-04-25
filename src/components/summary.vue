<template>
  <div class="componentbox">
    <h1>Neotoma Summary</h1>
    <h2>Governance</h2>
    <h2>Recent Activity</h2>
  </div>
</template>

<script>
  import * as d3 from 'd3'

  export default {
    name: 'summaryCard',
    data () {
      return {
        this: {pubs: null, dataset: null},
        items: null,
    }
  }
}
</script>
