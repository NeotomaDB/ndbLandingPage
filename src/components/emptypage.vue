<template>
  <div>
    <div class="headerbox">
      <img :src="path()" style="width:100%">
      <h1>Neotoma Paleoecology Landing Pages</h1>
      <p>This page is intended to operate as a resource for obtaining extended metadata about Neotoma resources and to serve as a platform for DOI landing pages.  To access information about an individual Neotoma Dataset include the dataset ID in the URL: <strong>http://data.neotomadb.org/{DatasetID}</strong>, for example, the dataset for the Lake Tulane Loss on Ignition dataset can be found at <a href="http://data.neotomadb.org/2662">http://data.neotomadb.org/2662</a>.</p> <p><strong>NOTE:</strong> This page is informational and will not directly lead to datasets.  To explore Neotoma datasets interactively please use the <a href="http://apps.neotomadb.org/Explorer">Neotoma Explorer</a>.</p>
      <p>This application is managed and maintained as an open-source project on the <a href="https://github.com/NeotomaDB/ndbLandingPage">Neotoma GitHub Repository</a>.</p>
    </div>
    <div class="headerbox" style='padding-left:10px;'>
        <h4>As of {{this.date.toISOString().substring(0,10)}}:</h4>
        <p>Neotoma manages <strong>{{this.rawstats.datasets}}</strong> datasets by <strong>{{this.rawstats.authors}}</strong> authors, from <strong>{{this.rawstats.publications}}</strong> publications across <strong>{{this.rawstats.countrygpid}}</strong> countries.</p>
    </div>
  </div>
</template>


<script>

  export default {
    name: 'emptyPage',
    data () {
      return {
        images: ["centralamerica-fs8.png",
                 "australia-fs8.png",
                 "easternna-fs8.png",
                 "japan-fs8.png",
                 "pacific_coast-fs8.png",
                 "southamerica-fs8.png",
                 "westernasia-fs8.png"],
        selectedimage: '',
        rawstats: '',
        date: new Date()
      }
    },
    created() {
      let self = this
      fetch(process.env.VUE_APP_API_ENDPOINT + '/v2.0/data/summary/rawbymonth?start=0&end=9999')
        .then((response) => { return response.json() })
        .then((data) => {
          self.rawstats = data.data.data[0]
        });
    },
    methods: {
      path() {
        var random = Math.floor(Math.random() * this.images.length);
        return require('../assets/maps/' + this.images[random]);
    }
  }
}
</script>
