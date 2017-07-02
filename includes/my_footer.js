(function () {
  var search = location.search ? location.search : false;
  
  var refer = window.referrer ? window.referrer : false;
  
  if (refer != false) {
  }
  
  var content = document.getElementById("reader-content");
  
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
})();
