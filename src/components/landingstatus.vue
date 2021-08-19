<template>
  <div class="pagebox">
    <b-container fluid>
      <b-row>
        <b-col cols="5">
          <b-card bg-variant="light" border-variant="secondary">
            <h2 class="status">Neotoma Web Link Status & Reference</h2>
          </b-card>
        </b-col>
        <b-col cols="7" align-self="center">
          <a href="https://api.neotomadb.org">Neotoma API</a> [<span v-if="this.ping['api'] === true" class="online">Online</span>
                       <span v-else class="offline">Offline</span>];
          <a href="https://apps.neotomadb.org/explorer">Explorer</a> [<span v-if="this.ping['explorer'] === true" class="online">Online</span>
                    <span v-else class="offline">Offline</span>];
          <a href="https://apps.neotomadb.org/explorer">Tilia API</a> [<span v-if="this.ping['tilia-dev'] === true" class="online">Online</span>
                     <span v-else class="offline">Offline</span>]<br>
          <a href="https://api-dev.neotomadb.org">Development API</a> [<span v-if="this.ping['api-dev'] === true" class="online">Online</span>
                    <span v-else class="offline">Offline</span>]<hr style="margin-top:2px;margin-bottom:2px;">
          <a href="https://open.neotomadb.org/dbschema">Database Schema</a> — <a href="https://open.neotomadb.org/dbschema">Database Manual</a>
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

        fetch(process.env.VUE_APP_APIDEV_ENDPOINT + '/v2.0/data/datasets/12')
          .then( (response) => {
            self.ping["api-dev"] = response.status === 200;
          })
          .catch(err => console.log(err));

        fetch(process.env.VUE_APP_API_ENDPOINT + '/v2.0/data/datasets/12')
          .then( (response) => {
            self.ping["api"] = response.status === 200;
          })
          .catch(err => console.log(err));

        fetch("https://apps.neotomadb.org/explorer",
              { mode: "no-cors" })
          .then( (response) => {
            self.ping["explorer"] = response.status === 0;
          })
          .catch(err => console.log(err));

        fetch(process.env.VUE_APP_TILIA_ENDPOINT + '/api')
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
