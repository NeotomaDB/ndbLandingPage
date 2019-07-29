<template>
  <div class="componentbox">
    <div v-if='items'>
      <div class="sitebox">
        <div class="textbox">
          <h1>Neotoma Dataset {{ this.dsid }}</h1>
          <h2>{{items.sitename}}</h2>
          <h3>{{items.datasettype}} Dataset - {{items.database}}</h3>
          <div v-if="items.datasettype == 'Geochronologic'" class="geochronwarn">
            <strong>Note</strong>: Geochronologic datasets are unique in Neotoma, they are not assigned DOIs and have limited associated metadata.  Please see the associated datasets below for more complete metadata.
          </div>
          <p><strong>Site Description: </strong><em>{{items.sitedescription}}</em></p>
          <p><strong>Site Notes: </strong><em>{{items.sitenotes}}</em></p>
        </div>
        <div class='mapbox'>
          <div class='map'>
            <l-map :zoom = 5 :center = items.coordinates >
              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
              <l-marker :lat-lng= items.coordinates ></l-marker>
            </l-map>
          </div>
          <small><strong>Coordinates</strong>: {{items.coord}}</small>
        </div>
      </div>
    </div>
    <div v-if="items">
      <div id="container">
        <div v-if="items.doi[1]==='No DOI minted'">
          <div class="buttondiv">DOI: {{ items.doi[1] }}</div>
        </div>
        <div v-else>
          <a target="_blank" :href="items.doi[0]">
             <div class="buttondiv">DOI: {{ items.doi[1][0] }}</div>
          </a>
        </div>
        <a target="_blank" :href=items.explorer>
          <div class="buttondiv">
            Neotoma Explorer Link
          </div>
        </a>
        <div v-if="items.datasettype == 'Geochronologic'">
            <div class="buttondiv">
              Current Data Disabled
            </div>
        </div>
        <div v-else>
          <a target="_blank" :href=items.currjson>
            <div class="buttondiv">
              Download Current Data (JSON)
            </div>
          </a>
        </div>
        <div v-if="items.datasettype == 'Geochronologic'">
            <div class="buttondiv">
              Data As Uploaded Disabled
            </div>
        </div>
        <div v-else>
          <a target="_blank" :href=items.frozenjson>
            <div class="buttondiv">
              Download Data As Uploaded (JSON)
            </div>
          </a>
        </div>
      </div>
    </div>

    <div v-if="items">
      <div v-if="items.doi.length > 0">
        <script type="application/ld+json">
          {{ datasetDOI }}
        </script>
      </div>
      <div v-else>
        <script type="application/ld+json">
          {{ buildSchema }}
        </script>
      </div>
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
        this: {pubs: [], dataset: []},
        items: [],
        datasetDOI: [],
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012', }
    },
    created() {
      let self = this

      fetch('http://api-dev.neotomadb.org/v2.0/data/datasets/' + this.dsid)
        .then((response) => { return response.json() })
        .then((data) => {
          /* Modifying the values and processing the inputs */
          if(data.data.length === 0 && dsid != 9999999){
            this.$router.push('/');
          }

          self.items = data.data[0].site
          self.items.database = self.items.datasets[0].database
          self.items.datasettype = self.items.datasets[0].datasettype.charAt(0).toUpperCase() + self.items.datasets[0].datasettype.slice(1);
          self.items.explorer = "http://apps.neotomadb.org/Explorer/?datasetid=" + self.items.datasets[0].datasetid;
          self.items.currjson = "http://api-dev.neotomadb.org/v2.0/data/download/" + self.items.datasets[0].datasetid;
          self.items.frozenjson = "http://api-dev.neotomadb.org/v2.0/data/frozen/" + self.items.datasets[0].datasetid;
          self.items.loc = JSON.parse(self.items.geography);
          self.items.coordinates = self.items.loc.coordinates.reverse();

          if (self.items.datasettype === 'Geochronologic') {
            self.items.currjson = ''
            self.items.frozenjson = ''
          }

          if (self.items.datasets[0].doi == null) {
            self.items.doi = ['', 'No DOI minted']
          } else {
            self.items.doi = ['https://dx.doi.org/'+ self.items.datasets[0].doi, self.items.datasets[0].doi ]
          }
          if (self.items.sitedescription === null) {
            self.items.sitedescription = "No description exists for this site."
          }
          if (self.items.sitenotes === null) {
            self.items.sitenotes = "No site notes exists for this site."
          }
          if (self.items.datasets[0].doi === null) {
            self.items.DOI = "No DOI has been minted for this site."
          }

          if (self.items.coordinates[0].length > 1) {
            var coordlen = self.items.coordinates[0].length;
            self.items.coordinates = self.items.coordinates[0]
              .reduce((acc, cur) => [(acc[0] + cur[0]), (acc[1] + cur[1])])
              .map(x => x / coordlen)
              .reverse()
          }

          self.items.coord = self.items.coordinates.map(x => Math.round(x * 100) / 100);
      });
    },
    mounted: {
      datasetDOI: function() {
        var output = {}

        fetch(this.items.doi[0], {headers: {'Accept': 'application/vnd.schemaorg.ld+json'}})
        .then(response => response.json())
        .then((data) => { return data })

        return output;
      },
      buildSchema: function() {
        var output = {
          "@context": "http://schema.org",
          "@type": "Dataset",
          "license": "https://creativecommons.org/licenses/by/4.0/deed.en_US",
          "includedInDataCatalog": {
            "@type": "DataCatalog",
            "about": "Paleoecology",
            "publisher": {
              "@type": "Organization",
              "name": "Neotoma Paleoecological Database",
              "alternateName":"Neotoma",
              "description":"The Neotoma Paleoecology Database and Community is an online hub for data, research, education, and discussion about paleoenvironments.",
              "url": "http://neotomadb.org"
            },
            "funder": {
              "@type":"Organization",
              "name":"National Sciences Foundation",
              "alternateName": "NSF",
              "url": "http://nsf.gov"
            }
          },
          "about": "",
          "distribution":{
            "@type":"DataDownload",
            "contentUrl": this.items.currjson,
            "datePublished": "2018-02-02 14:24:27",
            "inLanguage": "en"
          },
          "spatialCoverage": {
            "@type": "Place",
            "name": this.items.sitename + " " + this.items.datasettype + " dataset",
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": this.items.coordinates[0],
                "longitude": this.items.coordinates[1],
                "elevation": this.items.altitude
            }
          }
        }

        if (!this.items.dataset[0].doi == null) {
          output["@context"] = {
            "@vocab": "http://schema.org/",
            "datacite": "http://purl.org/spar/datacite/",
          }

          output.identifier = {
              "@type": "PropertyValue",
              "propertyID": "http://purl.org/spar/datacite/doi",
              "url": this.items.doi[0],
              "value": this.items.doi[1]
          }
        }

        return output;
      }
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
