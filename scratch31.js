const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

let targetNode = null;
function traverse(node) {
  if (node.characters && node.characters.includes("✓  6 unit")) {
    targetNode = node;
    return;
  }
  if (node.children) {
    node.children.forEach(traverse);
  }
}
traverse(data.document);

if (targetNode) {
  console.log("Characters:", targetNode.characters);
  console.log("Style:", JSON.stringify(targetNode.style, null, 2));
  console.log("CharacterStyleOverrides:", targetNode.characterStyleOverrides);
  console.log("StyleOverrideTable:", JSON.stringify(targetNode.styleOverrideTable, null, 2));
} else {
  console.log("Not found");
}
