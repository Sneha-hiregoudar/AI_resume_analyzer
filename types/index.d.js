// Type definitions converted to JSDoc comments for JavaScript
// These are kept for reference but not used in runtime

/**
 * @typedef {Object} Resume
 * @property {string} id
 * @property {string} [companyName]
 * @property {string} [jobTitle]
 * @property {string} imagePath
 * @property {string} resumePath
 * @property {Feedback} feedback
 */

/**
 * @typedef {Object} Feedback
 * @property {number} overallScore
 * @property {ATSFeedback} ATS
 * @property {CategoryFeedback} toneAndStyle
 * @property {CategoryFeedback} content
 * @property {CategoryFeedback} structure
 * @property {CategoryFeedback} skills
 */

/**
 * @typedef {Object} ATSFeedback
 * @property {number} score
 * @property {Array<{type: "good" | "improve", tip: string}>} tips
 */

/**
 * @typedef {Object} CategoryFeedback
 * @property {number} score
 * @property {Array<{type: "good" | "improve", tip: string, explanation: string}>} tips
 */