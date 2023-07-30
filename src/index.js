const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const { db } = require('./model/dbConnection');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// read
app.get('/api/readData', (req, res) => {
  const sqlQuery = "SELECT * FROM karyawan";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.get('/api/readUser/:nama', (req, res) => {
  const nama = req.params.nama;

  const sqlQuery = "SELECT * FROM karyawan WHERE nama = ?";
  db.query(sqlQuery, nama, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
// #####

// create
app.post('/api/createUser', (req, res) => {
  const Npr = req.body.npr;
  const Nama = req.body.nama;
  const Alamat = req.body.alamat;
  const Tanggal_lahir = req.body.tanggal_lahir;
  const Jenis_kelamin = req.body.jenis_kelamin;
  const No_hp = req.body.no_hp;
  const Nik = req.body.nik;

  const sqlQuery = "INSERT INTO karyawan (npr,nama,alamat,tanggal_lahir,jenis_kelamin,no_hp,nik) VALUE (?, ?, ?, ?, ?, ?, ?)";
  db.query(sqlQuery, [Npr,Nama,Alamat,Tanggal_lahir,Jenis_kelamin,No_hp,Nik], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
// #####

// update
app.put('/api/updateUser', (req, res) => {
  const Npr = req.body.npr;
  const Nama = req.body.nama;
  const Alamat = req.body.alamat;
  const Tanggal_lahir = req.body.tanggal_lahir;
  const Jenis_kelamin = req.body.jenis_kelamin;
  const No_hp = req.body.no_hp;
  const Nik = req.body.nik;

  const sqlQuery = "UPDATE karyawan SET npr = ?, nama = ?, alamat = ?, tanggal_lahir = ?, jenis_kelamin = ?, no_hp = ? WHERE nik = ?";
  db.query(sqlQuery, [Npr, Nama, Alamat, Tanggal_lahir, Jenis_kelamin, No_hp, Nik], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
// #####

// delete
app.delete('/api/deleteUser', (req, res) => {
  const Id = req.body.id;

  const sqlQuery = "DELETE FROM karyawan WHERE id = ?";
  db.query(sqlQuery, Id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
// #####

app.listen(3000, () => {
  console.log('server berhasil berjalan pada port 3000!');
});