<template>
  <div class="componentbox">
    <div class="sitebox">
      <div class="textbox">
        <h1>Neotoma Dataset {{ this.dsid }}</h1>
        <h2>{{items.site.sitename}}</h2>
        <h3>{{items.datasettype}} Dataset</h3>
        <strong>{{items.dataset[0].databasename}}</strong>
        <p><strong>Site Description: </strong><em>{{items.site.sitedescription}}</em></p>
        <p><strong>Site Notes: </strong><em>{{items.site.sitenotes}}</em></p>
      </div>
      <div class='mapbox'>
        <div class='map'>
          <l-map :zoom = 6 :center = items.coordinates >
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng= items.coordinates ></l-marker>
          </l-map>
        </div>
        <small><strong>Coordinates</strong>: {{items.loc.coordinates}}</small>
      </div>
    </div>
    <div id="container">
      <div>DOI: {{items.DOI}}</div>
      <div><a target="_blank" :href=items.explorer>Neotoma Explorer Link</a></div>
      <div>Download JSON</div>
      <div>Download zipped CSV</div>
    </div>
  </div>
</template>


<script>
  import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
  export default {
    name: 'titleCard',
    props: {
      dsid: {
        required: true,
      },
    },
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup
    },
    data () {
      return {
        items: null,
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', }
    },
    methods: {
      fetchData: function () {
        let self = this

        fetch('http://api-dev.neotomadb.org/v2.0/data/datasets/' + this.dsid)
          .then((response) => { return response.json() })
          .then((data) => {
            /* Modifying the values and processing the inputs */
            self.items = data.data[0]
            self.items.datasettype = self.items.dataset[0].datasettype.charAt(0).toUpperCase() + self.items.dataset[0].datasettype.slice(1);
            self.items.explorer = "http://apps.neotomadb.org/Explorer/?datasetid=" + self.items.dataset[0].datasetid
            self.items.loc = JSON.parse(self.items.site.geography)
            self.items.coordinates = self.items.loc.coordinates.reverse()
            if (self.items.site.sitedescription === null) {
              self.items.site.sitedescription = "No description exists for this site."
            }
            if (self.items.site.sitenotes === null) {
              self.items.site.sitenotes = "No site notes exists for this site."
            }
            if (self.items.dataset[0].doi === null) {
              self.items.DOI = "No DOI has been minted for this site."
            }
        });
      }
    },
    mounted() {
      this.fetchData();
    }
  }
</script>

<style lang="css" scoped>
  @import "~leaflet/dist/leaflet.css";
  .container-leaflet {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
