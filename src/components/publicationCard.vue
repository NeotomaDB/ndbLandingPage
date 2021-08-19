/*  I'd like to improve the bibliographic/publication part here.
    in part we can use the Crossref API (potentially):
    https://api.crossref.org/works/10.7202/033027ar
    This gives us more bibliographic information and, in some cases, all the references
    that the paper actually cites.
*/

<template>
  <div class="componentbox">

    <h2>Publications</h2>

    <div v-if="this.pubs.length > 0" class="cardbox">
      <div v-for="i in this.pubs" v-bind:key="i.publicationid" class="namecard">
        <div v-if="i.publication.doi !== null">
          <a target="_blank" :href="'https://doi.org/' + i.publication.doi" rel="noreferrer">
            <img src="@/assets/DOI_logo.svg" class="doi" alt="DOI link to the dataset publication">
          </a></div>{{i.publication.citation}}
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

      fetch(process.env.VUE_APP_API_ENDPOINT + '/v2.0/data/datasets/' + this.dsid + '/publications')
        .then((response) => { return response.json() })
        .then((data) => {
          /* Modifying the values and processing the inputs */
          if (data.data === null) {
            data.data = [];
          }
          self.pubs = data.data
        })
    },
    mounted() {
    }
  }
</script>
