<template>
  <div class="componentbox">
    <h2>Other Associated Datasets</h2>

    <h3>Datasets at the Same Site</h3>

    <div v-if="this.dataset.length > 0">
      <div v-for="i in this.dataset"  class="namecard">
        <small>[{{ i.datasetid }}]</small> {{ i.datasettype.charAt(0).toUpperCase() + i.datasettype.slice(1) }}
      </div>
    </div>
    <div v-else>
      The site has no other datasets.
    </div>
  </div>
</template>


<script>
export default {
  name: 'commondata',
  props: {
    dsid: {
      required: true
    }
  },
  data () {
    return {
      msg: 'Common data rendered.',
      dataset: null,
      site: null
    }
  },
  methods: {
    fetchData: function () {
      let self = this

      fetch('http://api-dev.neotomadb.org/v2.0/data/datasets/' + this.dsid + '/sites')
        .then((response) => { return response.json() })
        .then((data) => {
          /* Modifying the values and processing the inputs */
          var siteid = data.data[0].siteid
          self.site = siteid

          fetch('http://api-dev.neotomadb.org/v2.0/data/sites/' + siteid + '/datasets')
            .then((response) => { return response.json() })
            .then((data) => {
              var outsets =  data.data[0].dataset.filter( x=> !(x.datasetid === parseInt(this.dsid) ))
              self.dataset = outsets
            })
      })
      fetch('http://api-dev.neotomadb.org/v2.0/data/datasets/' + this.dsid + '/publications')
        .then((response) => { return response.json() })
        .then((data) => {
          /* Modifying the values and processing the inputs */
          var siteid = data.data[0].siteid
          self.site = siteid

          fetch('http://api-dev.neotomadb.org/v2.0/data/sites/' + siteid + '/datasets')
            .then((response) => { return response.json() })
            .then((data) => {
              var outsets =  data.data[0].dataset.filter( x=> !(x.datasetid === parseInt(this.dsid) ))
              self.dataset = outsets
            })
      })

    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>
