<template>
  <div class="componentbox">
    <h2>Chronology</h2>

    <!-- <div v-if="this.items == null">
      There is no chronological information associated with this record.
    </div>-->
    <div class="cardbox">
        <div v-for="i in items" v-bind:key="i.chronologyid" class="namecard">
          <h3>{{i.chronology.chronologyName}}</h3>
          <strong>Age Type</strong>: {{i.chronology.agetype}}<br>
          <strong>Model Type</strong>: {{i.chronology.modelType}}<br>
          <div v-if="i.chronology.preparedby">
            <strong>Prepared by</strong>: {{i.chronology.preparedby.firstname + " " + i.chronology.preparedby.familyname}}<br>
          </div>
          <strong>Age Range</strong>: {{i.chronology.reliableagespan.younger}} to {{i.chronology.reliableagespan.older}}
        </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'ageinfo',
    props: {
      dsid: {
        required: true
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        items: null
      }
    },
    methods: {
      fetchData: function () {
        let self = this

        fetch(process.env.VUE_APP_API_ENDPOINT + '/v2.0/data/datasets/' + this.dsid + '/chronology')
          .then((response) => { return response.json() })
          .then((data) => {
            /* Modifying the values and processing the inputs */
            self.items = data.data
        });
      }
    },
    mounted() {
      this.fetchData();
    }
  }
</script>
