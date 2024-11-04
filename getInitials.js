/**
 * Return the initials for a name
 * @param str
 * @returns
 */
function getInitials(str) {
  if (!str) {
    return "";
  }

  let words = str.split(" ").filter(Boolean);
  let firstWord = words[0];
  let lastWord = words.length > 1 ? words[words.length - 1] : "";

  return [firstWord, lastWord]
    .filter(Boolean)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}

module.exports = getInitials;
