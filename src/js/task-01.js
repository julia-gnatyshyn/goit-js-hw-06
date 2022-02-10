const itemsList = document.querySelectorAll('.item');
console.log('Number of categories:', itemsList.length);

for (const item of itemsList) {
  console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.children.length);
}
