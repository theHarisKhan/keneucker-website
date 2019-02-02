var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    app = express(),
    favicon = require('express-favicon'),
    template = "ken",
    templatePath = path.join(__dirname, 'templates', template),
    assetsPath = path.join(__dirname, 'assets'),
    iconPath = path.join(assetsPath, "img", "KenEuckerLLCLogo.jpg"),
    debug = process.argv.length > 2 ? process.argv[2].indexOf('--debug') > -1 : false,
    port = debug ? 8080 : 80;

console.log('using the template ' + template, templatePath);

app.use(express.static(templatePath));

if (fs.existsSync(iconPath)) {
    console.log('using favicon', iconPath);
    app.use(favicon(iconPath));
}

app.get('/', function(req, res){
    res.sendFile(path.join(templatePath + '/index.html'));
});

app.use("/assets", function(req, res) {
    // var file = req.url = (req.url.indexOf('?') != -1) ? req.url.substring(0, req.url.indexOf('?')) : req.url;
    res.sendFile(path.join(assetsPath, req.url));
});

app.listen(port, function () {
    console.log("App listening on: http://localhost:" + port);
});