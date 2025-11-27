import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.join(process.cwd(), 'feedback.db'));

// Create feedback table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    opinion TEXT NOT NULL,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;