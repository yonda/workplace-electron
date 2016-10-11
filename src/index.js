var fs = require('fs');

onload = function() {
  var webview = document.getElementById("mainWebview");

  webview.addEventListener('new-window', function(e) {
    require('shell').openExternal(e.url);
  });
  webview.addEventListener("dom-ready", function(){
    fs.readFile((__dirname + '/usefull_facebook_at_work/style_for_webkit.css'), 'utf8', function(err, data) {
      webview.insertCSS(data);
    });
  });
}
