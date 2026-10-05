const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

let results = [];
function findRibbon(node, isMobile) {
  if (node.name === 'Android Compact - 2' || node.name.includes('Mobile')) {
    isMobile = true;
  }
  if (node.type === 'TEXT' && node.characters && node.characters.includes('Nearest CBT')) {
    results.push({
      text: node.characters,
      isMobile: isMobile,
      y: node.absoluteBoundingBox ? node.absoluteBoundingBox.y : 'N/A',
      parentY: node.parent ? (node.parent.absoluteBoundingBox ? node.parent.absoluteBoundingBox.y : 'N/A') : 'N/A'
    });
  }
  if (node.children) {
    node.children.forEach(c => findRibbon(c, isMobile));
  }
}

findRibbon(data.document, false);
console.log(JSON.stringify(results, null, 2));
