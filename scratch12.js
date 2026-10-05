const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

let results = [];
function findText(node, isMobile) {
  if (node.name === 'Android Compact - 2' || node.name.includes('Mobile')) {
    isMobile = true;
  }
  if (node.type === 'TEXT' && node.characters && node.characters.includes('Instant access')) {
    results.push({
      text: node.characters,
      isMobile: isMobile,
      style: node.style
    });
  }
  if (node.children) {
    node.children.forEach(c => findText(c, isMobile));
  }
}

findText(data.document, false);
console.log(JSON.stringify(results, null, 2));
