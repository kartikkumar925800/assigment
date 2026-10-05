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
  let visibleItem = frame73.children.find(c => c.visible !== false);
  console.log(JSON.stringify(visibleItem, null, 2));
}
