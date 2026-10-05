const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-full.json', 'utf8'));

let results = [];
function findPricesForCard(node, titleFound) {
  if (node.type === 'TEXT' && node.characters && node.characters.includes('JEE Main + Advanced 2027')) {
    titleFound = true;
  }
  if (titleFound && node.type === 'TEXT' && node.characters && node.characters.includes('₹')) {
    results.push(node.characters);
  }
  if (node.children) {
    node.children.forEach(c => findPricesForCard(c, titleFound));
  }
}

// Find all frames that are a PriceCard (which contain the text "JEE Main + Advanced 2027" or "Online Test Pack")
function searchCards(node, isMobile) {
  if (node.name === 'Android Compact - 2' || node.name.includes('Mobile')) isMobile = true;
  
  if (node.name.startsWith('Frame 1000005298') || node.name.startsWith('Frame 1000005303')) {
    let textNodes = [];
    function getText(n) {
      if (n.type === 'TEXT') textNodes.push(n.characters);
      if (n.children) n.children.forEach(getText);
    }
    getText(node);
    
    if (textNodes.some(t => t.includes('JEE Main + Advanced'))) {
      let prices = textNodes.filter(t => t.includes('₹'));
      console.log(`Mobile: ${isMobile} | Prices: ${prices.join(', ')}`);
    }
  }
  
  if (node.children) node.children.forEach(c => searchCards(c, isMobile));
}

searchCards(data.document, false);
