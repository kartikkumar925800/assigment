const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

let results = [];
function findTick(node) {
  if (node.type === 'VECTOR' || node.name === 'Tick' || node.name.includes('check') || (node.type === 'TEXT' && node.characters && node.characters.includes('✓'))) {
    // Only capture ones near our features
    results.push({ name: node.name, type: node.type, fills: node.fills, strokes: node.strokes, strokeWeight: node.strokeWeight });
  }
  if (node.children) {
    node.children.forEach(findTick);
  }
}

findTick(data.document);
// We'll just look for a generic tick in PriceCard
console.log(JSON.stringify(results.filter(r => r.name.toLowerCase().includes('tick') || r.name.toLowerCase().includes('check')).slice(0, 5), null, 2));
