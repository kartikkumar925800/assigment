const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

let results = [];
function findText(node) {
  if (node.type === 'TEXT' && node.characters && node.characters.includes('Attempt remotely')) {
    results.push({
      text: node.characters,
      fills: node.fills,
      style: node.style
    });
  }
  if (node.children) {
    node.children.forEach(findText);
  }
}

findText(data.document);
console.log(JSON.stringify(results.slice(0, 2), null, 2));
