/* eslint-disable */
import hljs from 'highlight.js';
import unescapeEntities from 'unescape';

/**
 * Pattern to scan "<code></code>" elements.
 * @type {RegExp}
 */
const pattern = /(<code class="hljs\b[^>]*>)([^<]*[^/]*[^c]*[^o]*[^d]*[^e]*)(<\/code>)/g;

/**
 * Naively scans html string for "<code></code>" elements and applies syntax
 * highlighting on its contents.
 * @param {!string} html
 * @return {string}
 */
export function highlightCodeSnippetsFromMarkup(html) {
  if (html.indexOf('<code') === -1) {
    // Do not scan if no "<code" is present
    return html;
  }
  return html.replace(pattern, function(m, open, code, close) {
    const language = inferLanguage(open);
    const formatted = unescapeEntities(code.trim());
    return open + hljs.highlight(language, formatted).value + close;
  });
}

/**
 * Highlight all code elements present into document.
 */
export function highlightAllCodeElementsInDoc() {
  const codes = window.document.querySelectorAll('code');
  for (let code of codes) {
    code.innerHTML = code.innerHTML.trim();
    hljs.highlightBlock(code);
  }
}

/**
 * @param {!string} open
 * @return {string} Inferred language.
 */
function inferLanguage(open) {
  let languages = ['javascript', 'java', 'swift', 'html'];
  for (let language of languages) {
    if (open.indexOf(language) > -1) {
      return language;
    }
  }
  return languages[0];
}
