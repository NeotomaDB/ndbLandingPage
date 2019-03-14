<template>
  <div class="pagebox">
    <b-container fluid>
      <b-row>
        <b-col cols="5">
          <b-card bg-variant="light" border-variant="secondary">
            <h5>Neotoma Web Resource Status</h5>
          </b-card>
        </b-col>
        <b-col cols="7" align-self="center">
          <a href="http://api.neotomadb.org">Neotoma API</a> [<span v-if="this.ping['api'] === true" class="online">Online</span>
                       <span v-else class="offline">Offline</span>];
          <a href="http://api-dev.neotomadb.org">Dev. API</a> [<span v-if="this.ping['api-dev'] === true" class="online">Online</span>
                    <span v-else class="offline">Offline</span>];
          <a href="http://apps.neotomadb.org/explorer">Explorer</a> [<span v-if="this.ping['explorer'] === true" class="online">Online</span>
                    <span v-else class="offline">Offline</span>];
          <a href="http://apps.neotomadb.org/explorer">Tilia API</a> [<span v-if="this.ping['tilia-dev'] === true" class="online">Online</span>
                     <span v-else class="offline">Offline</span>]
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'datastatus',
    data () {
      return {
        msg: 'Contact data rendered.',
        ping: { "api-dev": null, "explorer": null, "api": null, "tilia-dev": null }
      }
    },
    methods: {
      hitstuff: function() {
        let self = this

        fetch("http://api-dev.neotomadb.org/v2.0/data/datasets/12")
          .then( (response) => {
            self.ping["api-dev"] = response.status === 200;
          })
          .catch(err => console.log(err));

        fetch("http://api.neotomadb.org")
          .then( (response) => {
            self.ping["api"] = response.status === 200;
          })
          .catch(err => console.log(err));

        fetch("http://apps.neotomadb.org/explorer",
              { mode: "no-cors" })
          .then( (response) => {
            self.ping["explorer"] = response.status === 0;
          })
          .catch(err => console.log(err));

        fetch("http://tilia-dev.neotomadb.org/api/")
          .then( (response) => {
            self.ping["tilia-dev"] = response.status === 200;
          })
          .catch(err => console.log(err));

      }
    },
    created() {
      this.hitstuff();
    }
  }
</script>
