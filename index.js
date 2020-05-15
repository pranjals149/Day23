// const express = require('express');
// const cookieParser = require('cookie-parser');

// const app = express();

// app.get('/', (req, res) => {
//    res.cookie('name', 'GeeksForGeeks').send();
//    console.log('Cookies: ', req.cookies);

// });


// app.listen(3000, (err) => {
//     if(err){ console.log(err) } 
//     else { console.log('Success!!') }
// });

var express = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser('GFG'))
 
app.get('/', function (req, res) {
  res.cookie('name', 'GeeksForGeeks', { signed: true }).send();
  console.log('Signed Cookies: ', req.signedCookies)
})
 
app.listen(3000)