<template>
  <div class="componentbox">
    <h2>Chronology</h2>

    <!-- <div v-if="this.items == null">
      There is no chronological information associated with this record.
    </div>-->
    <div class="cardbox">
        <div v-for="i in items" v-bind:key="i.chronologyid" class="namecard">
          <h3>Chronology: {{i}}</h3>
<!--
          <strong>Age Type</strong>: {{i.agetype}}<br>''
          <div v-if="i.preparedby">
            <strong>Prepared by</strong>: {{i.preparedby.firstname + " " + i.preparedby.familyname}}<br>
          </div>
          <strong>Age Range</strong>: {{i.reliableagespan.younger}} to {{i.reliableagespan.older}}
        -->
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
