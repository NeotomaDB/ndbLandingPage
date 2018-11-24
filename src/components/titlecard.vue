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
      <a target="_blank" :href=items.explorer>
        <div class="buttondiv">
          Download JSON
        </div>
      </a>
        <a target="_blank" :href=items.explorer>
          <div class="buttondiv">
            Download zipped CSV
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
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)', }
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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
