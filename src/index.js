var fs = require('fs');

onload = function() {
  var webview = document.getElementById("mainWebview");

  webview.addEventListener('new-window', function(e) {
    require('shell').openExternal(e.url);
  });


  fs.readFile((__dirname + '/usefull_facebook_at_work/style_for_webkit.css'), 'utf8', function(err, data) {
    mainWindow.webContents.insertCSS(__dirname + '/usefull_facebook_at_work/style_for_webkit.css');
  });
}
