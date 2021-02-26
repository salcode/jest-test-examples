const reduceToExcerpt = (content='', maxChars=55) => {
  const trimmedContent = domParseStripHTML(content)
    .trim();
  if (
    'undefined' !== typeof trimmedContent[maxChars] &&
    ' ' !== trimmedContent[maxChars]
  ) {
    return reduceToExcerpt(content, maxChars-1);
  }
  return trimmedContent.substr(0, maxChars);
};

const domParseStripHTML = (html) => {
     let doc = new DOMParser().parseFromString(html, 'text/html');
     return doc.body.textContent || "";
}
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
