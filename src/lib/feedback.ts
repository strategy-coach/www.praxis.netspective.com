import db from './db';

export interface FeedbackMetadata {
  userAgent?: string;
  ip?: string;
  referrer?: string;
  language?: string;
  screenSize?: string;
  timezone?: string;
  platform?: string;
  [key: string]: unknown;
}

export interface FeedbackData {
  opinion: 'good' | 'bad';
  message?: string;
  sessionId?: string;
  metadata?: FeedbackMetadata;
}

export function saveFeedback(url: string, feedback: FeedbackData) {
  const stmt = db.prepare(`
    INSERT INTO feedback (url, opinion, message, session_id, metadata)
    VALUES (?, ?, ?, ?, ?)
  `);

  const result = stmt.run(
    url,
    feedback.opinion,
    feedback.message || null,
    feedback.sessionId || null,
    feedback.metadata ? JSON.stringify(feedback.metadata) : null
  );
  return result;
}