const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

let frameY = 0;
let buttonY = 0;
let frameHeight = 0;

function findRoadmapStuff(node) {
  if (node.name.includes('Roadmap Banner') && node.absoluteBoundingBox) {
    if (node.absoluteBoundingBox.width < 400 || node.name === 'Roadmap Banner') {
       console.log('Frame:', node.name, node.absoluteBoundingBox);
       frameY = node.absoluteBoundingBox.y;
       frameHeight = node.absoluteBoundingBox.height;
    }
  }
  if (node.type === 'TEXT' && node.characters && node.characters === 'Get Your RoadMap') {
    console.log('Button Text:', node.absoluteBoundingBox);
    buttonY = node.absoluteBoundingBox.y;
  }
  if (node.children) node.children.forEach(findRoadmapStuff);
}
findRoadmapStuff(data.document);
