const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

let results = [];
function findPrices(node, context) {
  let isMobile = context.isMobile || node.name === 'Android Compact - 2' || node.name.includes('Mobile');
  if (node.type === 'TEXT') {
    if (node.characters.includes('₹') || node.characters.includes('4,999') || node.characters.includes('6,999') || node.characters.includes('1,999') || node.characters.includes('2,499') || node.characters.includes('11,999') || node.characters.includes('7,499')) {
      results.push({
        text: node.characters,
        isMobile: isMobile,
      });
    }
  }
  if (node.children) {
    node.children.forEach(c => findPrices(c, { isMobile }));
  }
}

findPrices(data.document, { isMobile: false });
console.log(JSON.stringify([...new Set(results.map(r => r.text + ' (Mobile: ' + r.isMobile + ')'))], null, 2));
