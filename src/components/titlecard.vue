<template>
  <div class="componentbox">
    <div class="sitebox">
      <div class="textbox">
        <h1>Neotoma Dataset {{ dsid }}</h1>
        <h2>{{items.Site.SiteName}}</h2>
        <h3>{{items.DatasetType}} Dataset</h3>
        <strong>{{items.DatabaseName}}</strong>
        <p><em>{{items.Site.SiteDescription}}</em></p>
      </div>
      <div class='mapbox'>
        <div class='map'>
          <l-map :zoom="zoom" :center=items.loc >
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng= items.loc ></l-marker>
          </l-map>
        </div>
        <small><strong>Coordinates</strong>: [{{items.Site.LongitudeEast}}, {{items.Site.LatitudeNorth}}]</small>
      </div>
    </div>
    <ul>
      <li>DOI: {{items.DOI}}</li>
      <li>Links</li>
      <ul>
        <li>Neotoma Explorer: <a :href= items.Explorer >Neotoma Explorer Link</a></li>
        <li>Download JSON</li>
        <li>Download zipped CSV</li>
      </ul>
      <li>Dataset Type</li>
    </ul>
  </div>
</template>

<script>
  import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';

  export default {
    name: 'titleCard',
    props: {
      dsid: {
        type: String,
        required: true
      }
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
        zoom: 13,
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: L.latLng(47.413220, -1.219482),
        currentZoom: 13,
        currentCenter: L.latLng(47.413220, -1.219482),      }
    },
    methods: {
      fetchData: function () {
        let self = this

        fetch('http://api.neotomadb.org/v1/data/datasets/' + this.dsid)
          .then((response) => { return response.json() })
          .then((data) => {
            /* Modifying the values and processing the inputs */
            self.items = data.data[0]
            self.items.DatasetType = self.items.DatasetType.charAt(0).toUpperCase() + self.items.DatasetType.slice(1);
            self.items.Explorer = "http://apps.neotomadb.org/Explorer/?datasetid=" + self.items.DatasetID
            self.items.loc = [items.Site.LatitudeNorth, items.Site.LatitudeEast]
            if (self.items.Site.SiteDescription === null) {
              self.items.Site.SiteDescription = "No description exists for this site."
            }
            if (self.items.DOI === null) {
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
