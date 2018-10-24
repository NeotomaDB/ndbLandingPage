fetch('http://api-dev.neotomadb.org/v2.0/data/datasets/12/',
  { credentials: 'omit'  })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
