export default function reduceToExcerpt(content='', maxChars=55) {
  const trimmedContent = domParseStripHTML(content)
    .trim();
  if (
    'undefined' !== typeof trimmedContent[maxChars] &&
    ' ' !== trimmedContent[maxChars]
  ) {
    return reduceToExcerpt(content, maxChars-1).trimEnd();
  }
  return trimmedContent.substr(0, maxChars).trimEnd();
};

const domParseStripHTML = (html) => {
     let doc = new DOMParser().parseFromString(html, 'text/html');
     return doc.body.textContent || "";
}

