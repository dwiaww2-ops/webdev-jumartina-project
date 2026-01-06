const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..')));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname, '..', 'chalange4', 'index.html');
});

app.get('/api/info', (req, res) => {
    res.json({
        pesan: "Hallo ini dari node.js",
        waktu: new Date().toLocaleString()
    });
});

app.post('/submit', (req, res) => {
  const { name, email, number } = req.body;
  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'Nama tidak boleh kosong' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email harus valid (contoh: user@example.com, user@gmail.com)' });
  }
  if (!number || isNaN(number)) {
    return res.status(400).json({ error: 'Nomor harus berupa angka' });
  }
  res.json({ message: 'Data berhasil diterima', data: { name, email, number } });
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hallo!' });
});

app.listen(3000, () => {
    console.log('Server jalan di http://localhost:3000');
});
