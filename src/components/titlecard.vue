<template>
  <div class="componentbox">
    <div class="sitebox">
      <div class="textbox">
        <h1>Neotoma Dataset {{ this.dsid }}</h1>
        <h2>{{items.site.sitename}}</h2>
        <h3>{{items.datasettype}} Dataset</h3>
        <strong><small>{{items.dataset[0].database}}</small></strong>
        <p><strong>Site Description: </strong><em>{{items.site.sitedescription}}</em></p>
        <p><strong>Site Notes: </strong><em>{{items.site.sitenotes}}</em></p>
      </div>
      <div class='mapbox'>
        <div class='map'>
          <l-map :zoom = 5 :center = items.coordinates >
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng= items.coordinates ></l-marker>
          </l-map>
        </div>
        <small><strong>Coordinates</strong>: {{items.loc.coordinates}}</small>
      </div>
    </div>
    <div id="container">
       <a target="_blank" :href="items.doi[0]">
         <div class="buttondiv">DOI: {{ items.doi[1] }}</div>
      </a>
      <a target="_blank" :href=items.explorer>
        <div class="buttondiv">
          Neotoma Explorer Link
        </div>
      </a>
      <a target="_blank" :href=items.currjson>
        <div class="buttondiv">
          Download Current Data (JSON)
        </div>
      </a>
        <a target="_blank" :href=items.frozenjson>
          <div class="buttondiv">
            Download Data As Uploaded (JSON)
          </div>
        </a>
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
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012', }
    },
    methods: {
      fetchData: function () {
        let self = this

        fetch('http://api-dev.neotomadb.org/v2.0/data/datasets/' + this.dsid)
          .then((response) => { return response.json() })
          .then((data) => {
            /* Modifying the values and processing the inputs */
            if(data.data.length == 0){
              this.$router.push('/');
            }

            self.items = data.data[0]
            self.items.datasettype = self.items.dataset[0].datasettype.charAt(0).toUpperCase() + self.items.dataset[0].datasettype.slice(1);
            self.items.explorer = "http://apps.neotomadb.org/Explorer/?datasetid=" + self.items.dataset[0].datasetid;
            self.items.currjson = "http://api-dev.neotomadb.org/v2.0/data/download/" + self.items.dataset[0].datasetid;
            self.items.frozenjson = "http://api-dev.neotomadb.org/v2.0/data/download/" + self.items.dataset[0].datasetid;
            self.items.loc = JSON.parse(self.items.site.geography);
            self.items.coordinates = self.items.loc.coordinates.reverse();
            if (self.items.dataset[0].doi == null) {
              self.items.doi = ['', 'No DOI minted']
            } else {
              self.items.doi = ['https://dx.doi.org/'+ self.items.dataset[0].doi, self.items.dataset[0].doi ]
            }
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
    max-width: 300px;
    height: 200px;
  }
</style>
