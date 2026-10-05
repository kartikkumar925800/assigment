const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

function findRoadmap(node) {
  if (node.name.includes('Roadmap') && node.type === 'FRAME' && node.absoluteBoundingBox.width < 400) {
    console.log(node.name, node.absoluteBoundingBox);
    if (node.children) {
      node.children.forEach(c => console.log('  ', c.name, c.type, c.absoluteBoundingBox));
    }
  }
  if (node.children) node.children.forEach(findRoadmap);
}
findRoadmap(data.document);
