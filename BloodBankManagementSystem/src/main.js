const express = require("express");
const app = express()
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const port = 5000
const path = require('path');
const ejs = require('ejs');

//data base connectionie mongodb
require('./db/connection')

//------------------------------------------------------------------------------------------

//public file initializatiomn ie js css files
let public_path = path.join(__dirname, '../public')
app.use(express.static(public_path + '/CSS'))
app.use(express.static(public_path + '/js'))

//------------------------------------------------------------------------------------------

//dynamiclly pass data threough html
let html_path = path.join(__dirname, '../templates/views')
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', html_path);

//------------------------------------------------------------------------------------------

//body parser initialization
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

//------------------------------------------------------------------------------------------


//signup
app.post('/home', function (req, res) {
   const name = req.body.username;
   const email = req.body.email;
   const password = req.body.password;
   const phone = req.body.phone;

   const data = {
      "name": name,
      "email": email,
      "password": password,
      "phone": phone
   }
   //insert data to mongodb
   const db = mongoose.connection;

   //creation of index
   const b = db.collection('power').createIndex({ "email": 1, "phone": 1 }, { "unique": true })

   db.collection('power').insertOne(data, (err, collection) => {
      if (err) throw err;
      console.log("Record inserted Successfully");
   });
   return res.sendFile(html_path + '/home.html');
})

//------------------------------------------------------------------------------------------

//login
app.post('/home1', function (req, res) {
   const email = req.body.email;
   const password = req.body.password;
   const phone = req.body.phone;

   const data = {
      "email": email,
      "password": password,
      // "phone": phone
   }


   //fetch data from the database

   const db = mongoose.connection;
   db.collection('power').find(data).toArray((err, result) => {

      console.log(result);
      // console.log(result[0].email===data.email);

      if (result.length===1) {
         return res.sendFile(html_path + '/home.html');
      }
      else if(result[0]==undefined){
         return res.send("email or password not exist");

      }
   });

})
//------------------------------------------------------------------------------------------
//add donor details


app.post('/home2', function (req, res) {
   const name = req.body.d_name;
   const dob = req.body.d_dob;
   const email = req.body.d_email;
   const phone = req.body.d_phone;
   const country = req.body.d_country;
   const state = req.body.d_state;
   const district = req.body.d_district;
   const taluk = req.body.d_taluk;
   const address = req.body.d_address;
   const blood_type = req.body.d_blood_type;
   const old_donation_date = req.body.old_blood_doanate_date;
   const personalPhoto=req.body.personalPhoto;
   const add_donor_data = {

      "donor_name": name,
      "date_of_birth": dob,
      "email": email,
      "phone": phone,
      "cuntry":country,
      "state":state,
      "district":district,
      "taluk":taluk,
      "address":address,
      "blood_type":blood_type,
      "old_donation_date":old_donation_date,
      "personalPhoto":personalPhoto
   }
   //insert data to mongodb
   const db = mongoose.connection;

   //creation of index
   // const b = db.collection('add_donor').createIndex({ "email": 1, "phone": 1 }, { "unique": true })

   db.collection('add_donor').insertOne(add_donor_data, (err, collection) => {
      if (err) throw err;
      console.log("donor details added Successfully");
   });
   return res.sendFile(html_path + '/home.html');
})






//dynamic data
// const dynamic =
//    { name: "raj" }

// app.get('/', function (req, res) {
//    res.render('signup.html', { name: dynamic.name });
// })
// app.get('/', function (req, res) {
//    res.render('signup.html', { name: dynamic.name });
// })
// app.get('/login', function (req, res) {
//    res.render('login.html', { name: dynamic.name });

// })
//--------------------------------------------------------------------------------------------


//routing
app.get('/', function (req, res) {
   res.render('signup.html');
})
app.get('/', function (req, res) {
   res.render('signup.html');
})
app.get('/login', function (req, res) {
   res.render('login.html');
})


app.get('/donor/add_donors', (req, res) => {
   res.sendFile(html_path + '/add_donors.html');

})

app.get('/donor/update_donors', (req, res) => {
   res.sendFile(html_path + '/update_donors.html');

})
app.get('/donor/donor_details', (req, res) => {
   res.sendFile(html_path + '/donor_details.html');

})
app.get('*', function (req, res) {
   res.status(404).sendFile(html_path + '/404-error.html');
});


app.listen(port, () => {
   console.log(`server listening at port ${port}`);
})