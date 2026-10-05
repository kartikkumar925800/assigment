const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

function findNav(node, path) {
  if (path.includes('Mobile') && node.name === 'Navigation') {
    return node;
  }
  if (node.children) {
    for (let c of node.children) {
      let res = findNav(c, path + ' > ' + c.name);
      if (res) return res;
    }
  }
}

let nav = findNav(data.document, data.document.name);
if (nav) {
  console.log(JSON.stringify(nav.children.map(c => ({
    name: c.name, 
    type: c.type, 
    visible: c.visible !== false,
    text: c.characters
  })), null, 2));
}
