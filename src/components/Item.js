// Item.js
import React from 'react';

// Functional component for a single grocery item
function Item({ item, togglePurchased, deleteItem }) {
  return (
    <li className={item.purchased ? 'purchased' : ''}>
      {/* Toggle purchased status when clicked */}
      <span onClick={() => togglePurchased(item.id)}>
        {item.text}
      </span>
      {/* Delete button */}
      <button onClick={() => deleteItem(item.id)}> ❌</button>
    </li>
  );
}

export default Item;