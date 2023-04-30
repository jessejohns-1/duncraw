const sqlite3 = require('sqlite3').verbose();

const initializeDatabase = () => {
  const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQLite database.');
  });

  db.serialize(() => {
    db.run(`CREATE TABLE game_data (
              id INTEGER PRIMARY KEY,
              data TEXT NOT NULL
            )`);

    db.run(`INSERT INTO game_data (data) VALUES ('Example data')`);
  });

  return db;
};

module.exports = {
  initializeDatabase,
};