const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware untuk parsing body request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve file statis (untuk form HTML)
app.use(express.static('public'));

// Endpoint untuk form submission dengan validasi
app.post('/submit', (req, res) => {
  const { name, email, number } = req.body;
  
  // Validasi
  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'Nama tidak boleh kosong' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email harus valid (contoh: user@example.com)' });
  }
  if (!number || isNaN(number)) {
    return res.status(400).json({ error: 'Nomor harus berupa angka' });
  }
  
  res.json({ message: 'Data berhasil diterima', data: { name, email, number } });
});

// API endpoint: /hello
app.get('/hello', (req, res) => {
  res.json({ message: 'Hallo!' });
});

// API endpoint: /time
app.get('/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});