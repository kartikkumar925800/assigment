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
  let frame73 = nav.children.find(c => c.name === 'Frame 73');
  console.log(JSON.stringify(frame73.children.map(c => ({
    name: c.name, 
    visible: c.visible !== false,
    text: c.characters || (c.children && c.children[0] && c.children[0].characters)
  })), null, 2));
}
