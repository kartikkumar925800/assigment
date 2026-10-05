const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

function searchRoadmap(node) {
  if (node.type === 'TEXT' && node.characters && node.characters.includes('Get a free Roadmap')) {
    console.log(node.name, node.absoluteBoundingBox);
    let p = node;
    // traverse up
    // But we can't easily traverse up without a parent pointer
  }
  if (node.children) node.children.forEach(searchRoadmap);
}

// searchRoadmap(data.document);

function findNodeByName(node, name) {
  if (node.name.includes(name)) console.log(node.name, node.type, node.background, node.fills);
  if (node.children) node.children.forEach(c => findNodeByName(c, name));
}
findNodeByName(data.document, 'Roadmap');

