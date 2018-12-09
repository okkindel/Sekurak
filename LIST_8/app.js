const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const fs = require('fs');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const http = require('http');
const https = require('https');
const app = express();
app.use(helmet());

///////////////////////////////////////
//  DATABASE
///////////////////////////////////////

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'okkindel',
  password: 'Varden97',
  database: 'zagor'
});

connection.connect(function (err) {
  if (err) throw err
  console.log('You are now connected to mysql...')
})

///////////////////////////////////////
//  CORS
///////////////////////////////////////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
// app.use(cors());

///////////////////////////////////////
//  BCRYTP AND JWT
///////////////////////////////////////

const saltRounds = 5;
const timeOfToken = '100000';

///////////////////////////////////////
//  REGISTER
///////////////////////////////////////

app.post('/register', (req, res, next) => {
  connection.query('SELECT * FROM users WHERE email = ?', req.body.email, function (err, user) {
    if (user[0] == undefined) {
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
          connection.query('INSERT INTO users (email, password) VALUES (? , ?)', [req.body.email, hash], function (err, rows) {
            res.status(201).json({
              status: 'success',
            });
          });
        });
      });
    } else if (err) {
      res.status(500).json({
        status: 'Something went wrong.'
      });
    } else {
      res.status(401).json({
        status: 'Email exist.'
      });
    }
  });
});

///////////////////////////////////////
//  LOGIN
///////////////////////////////////////

app.post('/login', (req, res, next) => {

  connection.query('SELECT * FROM users WHERE email = ?', req.body.email, function (err, rows) {
    if (rows[0] != undefined) {
      bcrypt.compare(req.body.password, rows[0].password, function (err, isCorrect) {
        if (isCorrect == true) {
          var token = jwt.sign({
            user: req.body.email
          }, 'zagor', {
              expiresIn: timeOfToken
            });
          res.status(200).json({
            status: 'success',
            token: token
          });
        } else {
          res.status(401).json({
            status: 'Wrong password.'
          });
        }
      });
    } else {
      res.status(401).json({
        status: 'Wrong email.'
      });
    }
    if (err) {
      throw err;
    }
  });
});

///////////////////////////////////////
//  SUBMIT
///////////////////////////////////////

app.post('/submit', (req, res, next) => {
  try {
    jwt.verify(req.headers.authorization, 'zagor', function (err, decoded) {
      if (req.body.from == decoded.user) {
        connection.query('INSERT INTO przelewy (nadawca, odbiorca, konto, kwota, data) VALUES (?, ?, ?, ?, ?)', [req.body.from, req.body.to, req.body.account, req.body.ammount, Date.now()], function (err, rows) {
          if (err) {
            res.status(500).json({
              status: 'Something went wrong.'
            });
            throw err;
          } else {
            res.status(201).json({
              status: 'success',
            });
          }
        });
      }
    })
  } catch (err) {
    res.status(401).json({
      status: 'Token expired, you were logged out.',
    });
  }
});

///////////////////////////////////////
//  LIST
///////////////////////////////////////

app.post('/list', (req, res, next) => {
  try {
    jwt.verify(req.headers.authorization, 'zagor', function (err, decoded) {
      if (req.body.author == decoded.user) {
        connection.query('SELECT * FROM przelewy WHERE nadawca = ?', req.body.author, function (err, rows) {
          if (err) {
            res.status(500).json({
              status: 'Something went wrong.'
            });
            throw err;
          } else if (rows != undefined) {
            res.status(200).json({
              status: 'success',
              list: rows
            });
          } else {
            res.status(200).json({
              status: 'succes',
              rows: ''
            });
          }
        });
      }
    });
  } catch (err) {
    res.status(401).json({
      status: 'Token expired, you were logged out.',
      rows: ''
    });
  }
});

///////////////////////////////////////
//  SUMMARY
///////////////////////////////////////

app.post('/summary', (req, res, next) => {
  try {
    jwt.verify(req.headers.authorization, 'zagor', function (err, decoded) {
      if (req.body.author == decoded.user) {
        connection.query('SELECT * FROM przelewy WHERE nadawca = ? and id = ?', [req.body.author, req.body.id], function (err, rows) {
          if (err) {
            res.status(500).json({
              status: 'Something went wrong.'
            });
            throw err;
          } else if (rows[0] != undefined) {
            res.status(200).json({
              status: 'success',
              data: rows[0]
            });
          }
        });
      }
    });
  } catch (err) {
    res.status(401).json({
      status: 'Token expired, you were logged out.',
      data: ''
    });
  }
});

///////////////////////////////////////
//  RESET PASSWORD
///////////////////////////////////////

app.post('/reset', (req, res, next) => {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      connection.query('UPDATE users SET password = ? WHERE email = ?', [hash, req.body.email], function (err, rows) {
        if (rows.changedRows != 0) {
          res.status(200).json({
            status: 'success',
          });
        } else {
          res.status(401).json({
            status: 'Wrong email or password was used.'
          });
        }
        if (err) {
          throw err;
        }
      });
    });
  });
});


///////////////////////////////////////
//  LIST ADMIN
///////////////////////////////////////

app.post('/list-admin', (req, res, next) => {
  try {
    jwt.verify(req.headers.authorization, 'zagor', function (err, decoded) {
      if (req.body.author == decoded.user && decoded.user == 'admin') {
        connection.query('SELECT nadawca, odbiorca, data, id FROM przelewy WHERE accepted = ?', false, function (err, rows) {
          if (err) {
            res.status(500).json({
              status: 'Something went wrong.'
            });
            throw err;
          } else if (rows != undefined) {
            res.status(200).json({
              status: 'success',
              list: rows
            });
          } else {
            res.status(200).json({
              status: 'succes',
              rows: ''
            });
          }
        });
      } else {
        res.status(401).json({
          status: 'Unauthorized.',
          rows: ''
        });
      }
    });
  } catch (err) {
    res.status(401).json({
      status: 'Token expired, you were logged out.',
      rows: ''
    });
  }
});

///////////////////////////////////////
//  ACCEPT PRZELEW
///////////////////////////////////////

app.post('/change-accepted', (req, res, next) => {

  try {
    jwt.verify(req.headers.authorization, 'zagor', function (err, decoded) {
      if (req.body.author == decoded.user && decoded.user == 'admin') {
        connection.query('UPDATE przelewy SET accepted = ? WHERE id = ?', [true, req.body.id], function (err, rows) {
          if (rows.changedRows != 0) {
            res.status(200).json({
              status: 'success',
            });
          } else {
            res.status(500).json({
              status: 'Something went wrong.'
            });
          } if (err) {
            res.status(500).json({
              status: 'Something went wrong.'
            });
            throw err;
          }
        });
      }
    });
  } catch (err) {
    res.status(401).json({
      status: 'Token expired, you were logged out.',
      rows: ''
    });
  }
});

///////////////////////////////////////
//  APP GET ROOT
///////////////////////////////////////

app.get("/", function (req, res) {
  res.sendfile('./dist/index.html')
});

app.get(/^(.+)$/, function (req, res) {
  res.sendfile(__dirname + '/dist' + req.params[0]);
});

///////////////////////////////////////
//  404 NOT FOUND
///////////////////////////////////////

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

///////////////////////////////////////
//  INTERNAL ERROR
///////////////////////////////////////

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: 'error',
    error: err
  });
});

///////////////////////////////////////
//  APP LISTEN
///////////////////////////////////////

var options = {
  key: fs.readFileSync('./cert/server.key'),
  cert: fs.readFileSync('./cert/server.crt'),
};


var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

httpServer.listen(1331);
httpsServer.listen(1332);