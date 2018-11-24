<template>
  <div class="componentbox">
    <h2>Chronological</h2>
    <div v-if="this.items == null">
      There is no chronological information associated with this record.
    </div>
    <div v-else>
      <div v-for="i in this.items" class="namecard">
        <h3>Chronology: {{i.chronologyname}}</h3>

          <strong>Age Type</strong>: {{i.agetype}}
          <strong>Prepared by</strong>: {{i.preparedby.firstname + " " + i.preparedby.familyname}}
          <strong>Age Range</strong>: {{i.chronologyagepan.younger}} to {{i.chronologyagepan.older}}
        </div>
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

        fetch('http://api-dev.neotomadb.org/v2.0/data/datasets/' + this.dsid + '/chronology')
          .then((response) => { return response.json() })
          .then((data) => {
            /* Modifying the values and processing the inputs */
            self.items = data.data[0].chronologies
        });
      }
    },
    mounted() {
      this.fetchData();
    }
  }
</script>
