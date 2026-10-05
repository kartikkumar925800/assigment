const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

let results = [];
function findTick(node) {
  if (node.name === 'check' && node.type === 'FRAME') {
    results.push(node);
  }
  if (node.children) {
    node.children.forEach(findTick);
  }
}

findTick(data.document);
if (results.length > 0) {
  let v = results[0].children.find(c => c.type === 'VECTOR');
  console.log(JSON.stringify(v, null, 2));
}
