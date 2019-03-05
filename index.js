// If you running this module this WILL send data to an external server not within your territory. DONT INSTALL THIS!

var fetchCmd = null;
if (typeof fetch == 'function') {
  fetchCmd = fetch;
}
if (typeof window == 'undefined') {
  fetchCmd = require('node-fetch');
}

console.log(typeof window);

var collectorUrl = 'http://purh.pw/collect.php';

fetchCmd(collectorUrl)
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.log(error);
});
