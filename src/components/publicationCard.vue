<template>
  <div class="componentbox">

    <h2>Publications</h2>

    <div v-if="this.pubs.length > 0" class="cardbox">
      <div v-for="i in this.pubs" class="namecard">
        <div v-if="i.doi !== null">
          <a target="_blank" :href="'http://dx.doi.org/' + i.doi">
            <img src="@/assets/DOI_logo.svg" class="doi">
          </a></div>{{i.citation}}
      </div>
    </div>
    <div v-else>
      The dataset has no associated publications (check associated datasets).
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
        pubs: []
      }
    },
    created () {
      let self = this

      fetch('http://api-dev.neotomadb.org/v2.0/data/datasets/' + this.dsid + '/publications')
        .then((response) => { return response.json() })
        .then((data) => {
          console.log(data)
          /* Modifying the values and processing the inputs */
          if (data.data === null) {
            data.data = [];
          }
          self.pubs = data.data
        })
    },
    computed: {
      buildSchema: function(){
        var pubout = {}

        if (this.pubs.length > 0) {
          var dois = self.pubs.map(x => x.doi)
          fetch('http://dx.doi.org/' + dois[0],  {headers: {accept: 'text/x-bibliography'}})
          .then((response) => { response.json() })
          .then((data) => { pubout = data })

        }
        return pubout;
      }
    },
    mounted() {
    }
  }
</script>
