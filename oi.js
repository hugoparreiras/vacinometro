var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://imunizacao-es.saude.gov.br/_search',
  'headers': {
    'Authorization': 'Basic aW11bml6YWNhb19wdWJsaWM6cWx0bzV0JjdyX0ArI1Rsc3RpZ2k=',
    'Content-Type': 'application/json',
    'Cookie': 'ELASTIC-PROD=1618360733.927.19285.438134'
  },
  body: JSON.stringify({
    "size": 10
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

let dados = response.body.hits.hits;

