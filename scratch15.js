const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

function findCard(node) {
  if (node.name === 'Frame 1000005298' || node.name === 'Frame 1000005303') {
    console.log(node.name, node.strokes, node.strokeWeight, node.children.find(c => c.name.includes('Frame 1000005485')));
  }
  if (node.children) node.children.forEach(findCard);
}
findCard(data.document);
