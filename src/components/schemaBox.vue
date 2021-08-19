<template>
  <div id="scienceSchema">
    <script type="application/ld+json">
      {{ schemaData }}
    </script>
  </div>
</template>

<script>
  export default {
    name: 'schemaCard',
    props: {
      items: {
        required: true
      }
    },
    data () {
      return {
        msg: 'Contact data rendered.',
        buildSchema: null
      }
    },
    computed: {
      schemaData: function() { 

        var output = {
          "@context": "https://schema.org",
          "@type": "Dataset",
          "license": "https://creativecommons.org/licenses/by/4.0/deed.en_US",
          "name": this.items.sitename + " " + this.items.datasettype + " dataset",
          "description": "Landing page for " + this.items.datasettype + " data from " + this.items.sitename + ", including data download options and linked resources.",
          "includedInDataCatalog": {
            "@type": "DataCatalog",
            "name": this.items.database,
            "about": "Paleoecology",
            "publication": "Williams JW, et al. (2018). The Neotoma Paleoecology Database, a multiproxy, international, community-curated data resource. Quaternary Research, 89(1), 156-177.",
            "publisher": {
              "@type": "Organization",
              "name": "Neotoma Paleoecological Database",
              "alternateName":"Neotoma",
              "description":"The Neotoma Paleoecology Database and Community is an online hub for data, research, education, and discussion about paleoenvironments.",
              "url": "https://neotomadb.org"
            },
            "funder": {
              "@type":"Organization",
              "name":"National Sciences Foundation",
              "alternateName": "NSF",
              "url": "https://nsf.gov"
            },
            "isAccessibleForFree": true
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
            "name": this.items.sitename,
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": this.items.coordinates[0],
                "longitude": this.items.coordinates[1],
                "elevation": this.items.altitude
            }
          }
        }

        if (!this.items.datasets[0].doi == null) {
          output["@context"] = {
            "@vocab": "https://schema.org/",
            "datacite": "https://purl.org/spar/datacite/",
          }

          output.identifier = {
              "@type": "PropertyValue",
              "propertyID": "https://purl.org/spar/datacite/doi",
              "url": this.items.datasets[0].doi[0],
              "value": this.items.datasets[0].doi[1]
          }
        }

        return output;
      }
  }
}
</script>
