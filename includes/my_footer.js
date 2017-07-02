(function ($) {
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

  /*
  function reqListener(returnData) {
    console.log(returnData);
    
    var responseText = returnData;

    console.log("response: " + responseText);

    if (responseText) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(responseText, "text/xml");

      console.log("parsed: " + xmlDoc);

      content = xmlDoc.getElementsByClassName("entry-content").innerHTML;
    }

    element.innerHTML = content ? content : responseText;
  }
  */
  
  $.ajax({
    url: url,
    //dataType: "xml"
  }).done(function(data) {
    console.log(data);
    
    var responseText = data;

    /*
    if (responseText) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(responseText, "text/xml");

      console.log("parsed: " + xmlDoc);

      content = xmlDoc.getElementsByClassName("entry-content").innerHTML;
    }
    */
    
    /*
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    responseHtml = converter.makeHtml(responseText);

    element.innerHTML = responseHtml;
    */
    
    element.innerHTML = responseText;
    console.log("Activating MathJax..");
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"reader-content"]);
  });
  
  /*
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.addEventListener("load", reqListener);
  xmlHttp.open("GET", url);
  xmlHttp.overrideMimeType('application/xml');
  //xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xmlHttp.responseType = 'document';
  xmlHttp.send();
  */
})(jQuery);
