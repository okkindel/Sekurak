const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
var mysql = require('mysql')
var jwt = require('jsonwebtoken');
const app = express();

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
app.use(cors());

///////////////////////////////////////
//  REGISTER
///////////////////////////////////////

app.post('/register', (req, res, next) => {
  connection.query('SELECT * FROM users WHERE email = ?', req.body.email, function (err, user) {
    if (user[0] == undefined) {
      connection.query('INSERT INTO users (email, password) VALUES (? , ?)', [req.body.email, req.body.password], function (err, rows) {
        res.status(201).json({
          status: 'success',
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
      if (req.body.password == rows[0].password) {
        var token = jwt.sign({
          user: req.body.email
        }, 'zagor', {
          expiresIn: '300000'
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
      status: 'Token expired, login again.',
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
      status: 'Token expired, login again.',
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
      status: 'Token expired, login again.',
      data: ''
    });
  }
});

///////////////////////////////////////
//  RESET PASSWORD
///////////////////////////////////////

app.post('/reset', (req, res, next) => {

  connection.query('UPDATE users SET password = ? WHERE email = ?', [req.body.password, req.body.email], function (err, rows) {
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

app.listen(1337, () => {
  console.log('App listening on port 1337!');
});