const express = require('express');
const { initializeDatabase } = require('./db');
const cors = require('cors');

const app = express();
const port = 3001;

const db = initializeDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/interact', (req, res) => {
  const userInput = req.body.userInput;
  res.json({ message: 'Example response' });
});

app.get('/api/data', (req, res) => {
  db.get('SELECT * FROM game_data WHERE id = 1', (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ data: row.data });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});