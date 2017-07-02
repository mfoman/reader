(function () {
  var url = false;
  
  var params = location.search ? new URLSearchParams(location.search) : false;
  
  if (params == false) { 
    url = window.referrer ? window.referrer : false;
  } else {
    url = params.get("q");
  }
  
  console.log("url: " + url);
  
  var element = document.getElementById("reader-content");
  var content = "Sorry, no dice!"
  
  if (url == false) {
    element.innerHTML = content;
    return false;
  }

  function reqListener() {
    var responseText = this.responseText;

    console.log("response: " + responseText);

    if (responseText) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(responseText, "text/xml");

      console.log("parsed: " + xmlDoc);

      content = xmlDoc.getElementsByClassName("entry-content").innerHTML;
    }

    element.innerHTML = content ? content : responseText;
  }
  
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.addEventListener("load", reqListener);
  xmlHttp.open("GET", url);
  //xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xmlHttp.responseType = 'document';
  xmlHttp.send();
})();
