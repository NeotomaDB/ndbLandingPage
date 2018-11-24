<template>
  <div class="componentbox">
    <h2>Publications</h2>
    The following publications are associated with this record:
    <div class="cardbox">
      <div v-for="i in this.pubs" class="namecard">
        <div class="pubtag">
          <div v-if="i.doi !== null"><a target="_blank" :href="'http://dx.doi.org/' + i.doi"><img src="@/assets/DOI_logo.svg" class="doi"></a></div>{{i.citation}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Publications',
    props: ['dsid'],
    data () {
      return {
        msg: 'Common data rendered.',
        pubs: null
      }
    },
    methods: {
      fetchData: function () {
        let self = this

        fetch('http://api-dev.neotomadb.org/v2.0/data/datasets/' + this.dsid + '/publications')
          .then((response) => { return response.json() })
          .then((data) => {
            /* Modifying the values and processing the inputs */
            self.pubs = data.data
          })

      }
    },
    mounted() {
      this.fetchData();
    }
  }
</script>
