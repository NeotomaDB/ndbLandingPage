<template>
  <div class="componentbox">

    <h2>Other Associated Datasets</h2>

    <h3>Datasets at the Same Site</h3>

    <div v-if="this.dataset.length > 0" class="cardbox">
      <div v-for="i in this.dataset"  class="namecard">
        <small>[<strong><a target="_blank" :href= "i.datasetid">{{ i.datasetid }}</a></strong>]</small> {{ i.datasettype.charAt(0).toUpperCase() + i.datasettype.slice(1) }}<br>
        <small><strong>{{i.database}}</strong></small>
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
      dataset: [],
      pbndataset: null,
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
              var dsdt = data.data
              self.dataset = dsdt[0].site.datasets.map( function(y)
                  {
                    return {datasetid: y.datasetid,
                            datasettype: y.datasettype,
                            database: y.database}
                  })
              .flat()
              .filter(x => x.datasetid !== parseInt(this.dsid))

            })
      })

      /*fetch('http://api-dev.neotomadb.org/v2.0/data/datasets/' + this.dsid + '/publications')
        .then((response) => { return response.json() })
        .then((data) => {
          /* Modifying the values and processing the inputs
          var pid = data.data.map(x => x.publicationid)

          pid.map(x =>
            fetch('http://api-dev.neotomadb.org/v2.0/data/sites/' + x + '/datasets')
            .then((response) => { return response.json() })
            .then((data) => {
              var outsets =  data.data[0].dataset.filter( x=> !(x.datasetid === parseInt(this.dsid) ))
              if (outsets === null) {
                self.pbndataset = '';
              } else {
                self.pbndataset = outsets.filter((v, i, a) => a.map(x => x.datasetid).indexOf(v.datasetid) === i);
              }
            })
      }) */

    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>
