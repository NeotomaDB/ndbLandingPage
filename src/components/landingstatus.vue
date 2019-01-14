<template>
  <div class="headerbox">
    <div>
      <strong>Neotoma Web Resource Status</strong>
    </div>
      <div class="statuscard">
        <div class="statusname">Neotoma api</div>
        <div v-if="this.ping['api'] === true" class="light">
          <img src='@/assets/gobutton.svg' />
        </div>
        <div v-else class="light">
          <img src='@/assets/stopbutton.svg' />
        </div>
      </div>
      <div class="statuscard">
        <div style="float:left;">Neotoma api-dev</div>
        <div v-if="this.ping['api-dev'] === true" class="light">
          <img src='@/assets/gobutton.svg' />
        </div>
        <div v-else class="light">
          <img src='@/assets/stopbutton.svg' />
        </div>
      </div>
      <div  class="statuscard">
        <div style="float:left;">Neotoma Explorer</div>
        <div v-if="this.ping['explorer'] === true" class="light">
          <img src='@/assets/gobutton.svg' />
        </div>
        <div v-else class="light">
          <img src='@/assets/stopbutton.svg' />
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'datastatus',
    data () {
      return {
        msg: 'Contact data rendered.',
        ping: { "api-dev": null, "explorer": null, "api": null }
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

      }
    },
    created() {
      this.hitstuff();
    }
  }
</script>
