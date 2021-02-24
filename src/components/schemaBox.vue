<template>
  <div>
    <script type="application/ld+json">
      {{ buildSchema }}
    </script>
  </div>
</template>

<script>
  export default {
    name: 'schemaCard',
    props: {
      dsid: {
        required: true
      }
    },
    data () {
      return {
        msg: 'Contact data rendered.',
        buildSchema: null
      }
    },
    methods: {
      schemaData: function() {
        let self = this;

        var output = {
          "@context": "http://schema.org",
          "@type": "Dataset",
          "license": "https://creativecommons.org/licenses/by/4.0/deed.en_US",
          "name": this.items.sitename + " " + this.items.datasettype + " dataset",
          "description": "Landing page for " + this.items.datasettype + "data from " + this.items.sitename + ", including data download options and linked resources.",
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
            "inLanguage": "en",
            "encodingFormat": "application/json"
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
              "url": this.items.dataset[0].doi[0],
              "value": this.items.dataset[0].doi[1]
          }
        }

        self.buildSchema = output;
      },
      mounted() {
        this.schemaData();
      }
  }
}
</script>
