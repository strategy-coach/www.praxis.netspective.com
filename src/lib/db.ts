import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.join(process.cwd(), 'feedback.db'));

// Create feedback table if it doesn't exist (with metadata JSON column)
db.exec(`
  CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    opinion TEXT NOT NULL,
    message TEXT,
    session_id TEXT,
    metadata TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Add new columns if they don't exist (for existing databases)
try {
  db.exec(`ALTER TABLE feedback ADD COLUMN session_id TEXT`);
} catch {
  // Column already exists
}
try {
  db.exec(`ALTER TABLE feedback ADD COLUMN metadata TEXT`);
} catch {
  // Column already exists
}

export default db;