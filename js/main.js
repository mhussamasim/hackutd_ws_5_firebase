import queries from './queries.js';

export const refreshEvent = document.createEvent('Event');
refreshEvent.initEvent('refresh', true, true);

document.addEventListener('DOMContentLoaded', () => {
  loadItems();
});
document.addEventListener('refresh', () => {
  clearItems();
  loadItems();
});

function clearItems() {
  const groceryCart = document.getElementById('cart-items');
  groceryCart.innerHTML = '';
}

async function loadItems() {
  const groceryCart = document.getElementById('cart-items');
  // Load items from database.
  const items = await queries.getItems();

  for (const [name, count] of Object.entries(items)) {
    // Create new item on page;
    const newItem = createItem(name, count);
    // Add item to cart.
    groceryCart.appendChild(newItem);
  }
}

function createItem(name, count) {
  const newItem = document.createElement('li');
  newItem.innerHTML = `<p><span>Name: </span><span class="item-name">${name}</span></p><span>Count: ${count}</span><button onclick="removeItem(this)">Remove item</button>`;
  return newItem;
}

async function addItem(el) {
  const name = el.parentElement.querySelector('.item-name').innerText;
  await queries.addItem(name);
  document.dispatchEvent(refreshEvent);
}

async function removeItem(el) {
  const name = el.parentElement.querySelector('.item-name').innerText;
  await queries.removeItem(name);
  document.dispatchEvent(refreshEvent);
}

window.addItem = addItem;
window.removeItem = removeItem;
