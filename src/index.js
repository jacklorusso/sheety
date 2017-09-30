import doHash from "../utils/hash";

const sheet = document.head.appendChild(document.createElement("style")).sheet;

function interleave(strings, interpolations) {
  return strings.reduce(
    (final, str, i) =>
      final + str + (interpolations[i] === undefined ? "" : interpolations[i]),
    ""
  );
}

export default function css(strings, ...interpolations) {
  const styles = interleave(strings, interpolations);
  const index = sheet.cssRules.length;
  const id = index.toString(36);
  const hash = doHash(id);
  const className = `s-${hash}`;
  const rule = `.${className} { ${styles} }`;

  sheet.insertRule(rule, index);
  return className;
}
