// Type definitions converted to JSDoc comments for JavaScript
// These are kept for reference but not used in runtime

/**
 * @typedef {Object} FSItem
 * @property {string} id
 * @property {string} uid
 * @property {string} name
 * @property {string} path
 * @property {boolean} is_dir
 * @property {string} parent_id
 * @property {string} parent_uid
 * @property {number} created
 * @property {number} modified
 * @property {number} accessed
 * @property {number|null} size
 * @property {boolean} writable
 */

/**
 * @typedef {Object} PuterUser
 * @property {string} uuid
 * @property {string} username
 */

/**
 * @typedef {Object} KVItem
 * @property {string} key
 * @property {string} value
 */

/**
 * @typedef {Object} ChatMessageContent
 * @property {"file" | "text"} type
 * @property {string} [puter_path]
 * @property {string} [text]
 */

/**
 * @typedef {Object} ChatMessage
 * @property {"user" | "assistant" | "system"} role
 * @property {string | ChatMessageContent[]} content
 */

/**
 * @typedef {Object} PuterChatOptions
 * @property {string} [model]
 * @property {boolean} [stream]
 * @property {number} [max_tokens]
 * @property {number} [temperature]
 * @property {Object} [tools]
 */

/**
 * @typedef {Object} AIResponse
 * @property {number} index
 * @property {Object} message
 * @property {any} [logprobs]
 * @property {string} finish_reason
 * @property {Object[]} usage
 * @property {boolean} via_ai_chat_service
 */