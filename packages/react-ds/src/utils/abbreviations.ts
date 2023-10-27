/**
 * Object that make correspondance between a word and its abbreviation
 */
const abbreviations = {
  'small': 'sm',
  'medium': 'md',
  'large': 'lg',
}

/**
 * Generic function that gives tha abbreviation of a word, or 
 * returns the same word if no abbreviation is found
 * 
 * @param {string} word array of functions to apply to the event
 * @returns {string}
 */
export const abbreviate = word => {
  return abbreviations[word] || word;
}