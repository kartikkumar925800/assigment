const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

let results = [];
function traverse(node, context) {
  let isMobile = context.isMobile || node.name === 'Android Compact - 2' || node.name.includes('Mobile');
  if (isMobile) {
    if (node.type === 'TEXT' && (node.characters.includes('Nearest CBT') || node.characters.includes('Attempt from Anywhere') || node.characters === 'CBT Plus +' || node.characters === 'Online Test Pack' || node.characters === 'JEE पकड़ Test series')) {
      results.push({
        text: node.characters,
        y: node.absoluteBoundingBox ? node.absoluteBoundingBox.y : 'N/A'
      });
    }
  }
  if (node.children) {
    node.children.forEach(c => traverse(c, { isMobile }));
  }
}

traverse(data.document, { isMobile: false });
results.sort((a,b) => a.y - b.y);
console.log(JSON.stringify(results, null, 2));
