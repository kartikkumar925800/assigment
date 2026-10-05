const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

let results = [];
function traverse(node, path) {
  if (node.type === 'TEXT' && node.characters === 'JEE Test Series') {
    results.push({ path, style: node.style });
  }
  if (node.children) {
    node.children.forEach(c => traverse(c, path + ' > ' + c.name));
  }
}

traverse(data.document, data.document.name);
console.log(JSON.stringify(results.slice(0, 5), null, 2));
