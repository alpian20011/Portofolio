const express = require('express');
const path = require('path');
const config = require('./config');
const icons = require('./icons');

const app = express();
app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1d' }));

const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[n] || icons.link}</svg>`;

app.get('/', (req, res) => res.render('index', { c: config, icon, year: new Date().getFullYear() }));
app.get('/healthz', (req, res) => res.type('text').send('ok'));
app.use((req, res) => res.status(404).type('text').send('Halaman tidak ditemukan'));

module.exports = app;

if (require.main === module) {
  const PORT = process.env.SERVER_PORT || process.env.PORT || 3000;
  app.listen(PORT, '0.0.0.0', () => console.log(`Portofolio berjalan di port ${PORT}`));
}
