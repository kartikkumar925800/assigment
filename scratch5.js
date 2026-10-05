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
let textNodes = [];
function findText(n) {
  if (n.type === 'TEXT') {
    textNodes.push({ text: n.characters, fills: n.fills, style: n.style, styleOverrideTable: n.styleOverrideTable, characterStyleOverrides: n.characterStyleOverrides });
  }
  if (n.children) {
    n.children.forEach(findText);
  }
}
findText(nav);
console.log(JSON.stringify(textNodes, null, 2));
