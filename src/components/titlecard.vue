<template>
  <b-container>
    <b-row cols="12" md="7" align-v = 'center'>
      <b-col cols="9">
        <b-container>
          <b-row cols="1">
            <h1>Neotoma Dataset {{ this.dsid }}</h1>
            <h2>{{items.sitename}}</h2>
            <h3>{{items.datasettype}} Dataset - {{items.database}}</h3>
            
            <div v-if="items.datasettype == 'Geochronologic'" class="geochronwarn">
              <strong>Note</strong>: Geochronologic datasets are unique in Neotoma, they are not assigned DOIs and have
              limited associated metadata. Please see the associated datasets below for more complete metadata.
            </div>
            <p><strong>Site Description: </strong><em>{{items.sitedescription}}</em></p>
            <p><strong>Site Notes: </strong><em>{{items.sitenotes}}</em></p>
          </b-row>
          <b-row align-h="center" align-v="center"  class='d-none d-md-block'>
            <b-row md="auto">
            <b-col cols="6" lg="auto">
              <h4 class="text-center"><small>Site Annotations</small></h4>
            </b-col>
            <b-col cols="6" lg="auto">
              <h4 class="text-center"><small>Dataset Annotations</small></h4>
            </b-col>
            </b-row>
            <b-row>
              <b-col cols="6" lg="auto">
                <throughput-widget read-only-mode="false" identifier="r3d100011761" :link.prop="items.siteid"
                  additional-type="site" orcid-client-id="APP-OKAEGWFY7MEOK4HE">
                </throughput-widget>
              </b-col>
              <b-col cols="6" lg="auto">
                <throughput-widget read-only-mode="false" identifier="r3d100011761" :link.prop="this.dsid"
                  additional-type="dataset" orcid-client-id="APP-OKAEGWFY7MEOK4HE"></throughput-widget>
              </b-col>
            </b-row>
          </b-row>
          <div class='d-block d-sm-none'>
            The dynamic site map is not displayed on mobile displays. Use the Neotoma Explorer link.<br>
            <small><strong>Coordinates</strong>: {{items.coord}}</small>
          </div>
        </b-container>
      </b-col>
      <b-col cols="3" class='d-none d-md-block'>
        <div v-b-tooltip.hover :title="attribution">
          <div class='map'>
            <l-map :zoom=5 :center=items.coordinates>
              <l-tile-layer :url="url"></l-tile-layer>
              <l-marker :lat-lng=items.coordinates></l-marker>
            </l-map>
          </div>
          <small><strong>Coordinates</strong>: {{items.coord}}</small>
        </div>
      </b-col>
    </b-row>
    <b-row cols="12" v-if='items' style="padding-top:10px;padding-bottom:10px;">
      <b-col>
          <b-button v-if="items.doi[1]==='No DOI minted'" variant="outline-danger">
            No DOI Minted
          </b-button>
          <b-button v-else variant="outline-dark" activetarget="_blank" :href="items.doi[0]" rel="noreferrer">
            DOI: {{ items.doi[1][0] }}
          </b-button>
      </b-col>
      <b-col>
        <b-button variant="outline-dark" activetarget="_blank" :href=items.explorer rel="noreferrer">
            Neotoma Explorer Link
        </b-button>
      </b-col>
      <b-col>
        <b-button v-if="items.datasettype == 'Geochronologic'" variant="outline-danger">
            Current Data Disabled
        </b-button>
        <b-button v-else target="_blank"  variant="outline-dark" :href=items.currjson rel="noreferrer">
              Download Current Data (JSON)
        </b-button>
      </b-col>
      <b-col>
        <b-button v-if="items.datasettype == 'Geochronologic'" variant="outline-danger">
          Data As Uploaded Disabled
        </b-button>
        <b-button v-else target="_blank"  variant="outline-dark" :href=items.frozenjson rel="noreferrer">
              Download Data As Uploaded (JSON)
        </b-button>
      </b-col>
    
    </b-row>
    <div v-if="items">
      <div id="thingy" v-if="items.doi.length > 0">
        <schemaBox :items="items"></schemaBox>
      </div>
    </div>
    
  </b-container>
</template>

<script>
  import schemaBox from './schemaBox.vue'

  export default {
    name: 'titleCard',
    props: {
      dsid: {
        required: true,
      },
    },
    directives: {
      'b-tooltip': 'b-tooltip',
      'b-button': 'b-button'
    },
    components: {
      'schemaBox': schemaBox
    },
    data() {
      return {
        this: {
          pubs: [],
          dataset: []
        },
        items: {
          doi: [null, null]
        },
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        attribution: [
          'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
          ''
        ],
        datasetschema: '',
      }
    },
    methods: {
      datasetDOI: function () {
        let self = this;
        self.datasetDOIs = self.items.doi[0]
        fetch(self.items.doi[0], {
            headers: {
              'Accept': 'application/vnd.schemaorg.ld+json'
            }
          })
          .then(data => {
            return data.text()
          })
          .then(function (text) {
            self.datasetschema = text
          })
          .catch(err => console.log(err))
      }
    },
    created() {
      let self = this

      fetch(process.env.VUE_APP_API_ENDPOINT + '/v2.0/data/datasets/' + this.dsid)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          /* Modifying the values and processing the inputs */
          if (data.data.length === 0) {
            this.$router.push('/');
          }

          self.items = data.data[0].site
          self.items.database = self.items.datasets[0].database
          self.items.datasettype = self.items.datasets[0].datasettype.charAt(0).toUpperCase() + self.items.datasets[0]
            .datasettype.slice(1);
          self.items.explorer = "https://apps.neotomadb.org/Explorer/?datasetids=" + self.items.datasets[0].datasetid;
          self.items.currjson = process.env.VUE_APP_API_ENDPOINT + "/v2.0/data/downloads/" + self.items.datasets[0]
            .datasetid;
          self.items.frozenjson = process.env.VUE_APP_API_ENDPOINT + "/v2.0/data/frozen/" + self.items.datasets[0]
            .datasetid;
          self.items.loc = JSON.parse(self.items.geography);
          self.items.coordinates = self.items.loc.coordinates.reverse();

          if (self.items.datasettype === 'Geochronologic') {
            self.items.currjson = ''
            self.items.frozenjson = ''
          }

          if (self.items.datasets[0].doi == null) {
            self.items.doi = ['', 'No DOI minted']
          } else {
            self.items.doi = ['https://doi.org/' + self.items.datasets[0].doi[0],
              self.items.datasets[0].doi
            ]
          }
          if (self.items.sitedescription === null) {
            self.items.sitedescription = "No description exists for this site."
          }
          if (self.items.sitenotes === null) {
            self.items.sitenotes = "No site notes exists for this site."
          }
          if (self.items.datasets[0].doi === null) {
            self.items.doi = "No DOI has been minted for this site."
          }

          if (self.items.coordinates[0].length > 1) {
            var coordlen = self.items.coordinates[0].length;
            self.items.coordinates = self.items.coordinates[0]
              .reduce((acc, cur) => [(acc[0] + cur[0]), (acc[1] + cur[1])])
              .map(x => x / coordlen)
              .reverse()
          }

          self.items.coord = self.items.coordinates.map(x => Math.round(x * 100) / 100);
        })
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