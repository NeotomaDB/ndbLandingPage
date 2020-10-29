<template>
  <div>
    <div class="headerbox">
      <img :src="path()" style="width:100%">
      <h1>Neotoma Paleoecology Landing Pages</h1>
      <p>This page is intended to operate as a resource for obtaining extended metadata about Neotoma resources and to serve as a platform for DOI landing pages.  To access information about an individual Neotoma Dataset include the dataset ID in the URL: <strong>http://data.neotomadb.org/{DatasetID}</strong>, for example, the dataset for the Lake Tulane Loss on Ignition dataset can be found at <a href="http://data.neotomadb.org/2662">http://data.neotomadb.org/2662</a>.</p> <p><strong>NOTE:</strong> This page is informational and will not directly lead to datasets.  To explore Neotoma datasets interactively please use the <a href="http://apps.neotomadb.org/Explorer">Neotoma Explorer</a>.</p>
      <p>This application is managed and maintained as an open-source project on the <a href="https://github.com/NeotomaDB/ndbLandingPage">Neotoma GitHub Repository</a>.</p>
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
        selectedimage: ''
      }
    },
    methods: {
      path() {
        var random = Math.floor(Math.random() * this.images.length);
        return require('../assets/maps/' + this.images[random]);
    }
  }
}
</script>
