<template>
  <div class="componentbox">
    <h2>Principal Investigator</h2>
    <div class="cardbox">
      <div v-for="i in items" :key="i.fullName" class="namecard">
        <strong>{{i.fullName}}</strong>
        <div v-if="i.email !== null"><small>{{i.email}}</small></div>
        <div v-if="i.email === null"><small>No email address on record</small></div>
        <div v-if="i.url !== null"><br><a :href=i.url>Research Website</a></div>
      </div>
    </div>
  </div>
</template>
tatus
<script>
  export default {
    name: 'contacts',
    props: {
      dsid: {
        required: true
      }
    },
    data () {
      return {
        msg: 'Contact data rendered.',
        items: null
      }
    },
    methods: {
      fetchData: function () {
        let self = this

        fetch(process.env.VUE_APP_API_ENDPOINT + '/v2.0/data/datasets/' + this.dsid + '/contacts')
          .then((response) => { return response.json() })
          .then((data) => {
            /* Modifying the values and processing the inputs */
            self.items = data.data[0].contact
        });

      }
    },
    mounted() {
      this.fetchData();
    }
  }
</script>
