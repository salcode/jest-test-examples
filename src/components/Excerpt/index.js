const reduceToExcerpt = (content='', maxChars=55) => {
  return content.substr(0, maxChars);
};

/**
 * Display excerpt version of longer text based on maximum number of characters.
 * Truncation will occur in at a blank space (not half words).
 *
 * @param {string} props.content  Original text that will be truncacted.
 * @param {number} props.maxChars Maximum number of characters in excerpt.
 * @return {Element} Element containing truncated content (without
 *                   breaking mid-word).
 */
export default function Excerpt({ content='', maxChars=55 }) {
  return (
    <div>
      {reduceToExcerpt(content, maxChars)}
    </div>
  );
}
