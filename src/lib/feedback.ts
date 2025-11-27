import db from './db';

export interface FeedbackData {
   opinion: 'good' | 'bad';
   message?: string;
}

export function saveFeedback(url: string, feedback: FeedbackData) {
  const stmt = db.prepare(`
    INSERT INTO feedback (url, opinion, message)
    VALUES (?, ?, ?)
  `);
  
  const result = stmt.run(url, feedback.opinion, feedback.message || null);
  return result;
}