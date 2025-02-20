// ItemList.js
import React from 'react';
import Item from './Item'; // Import the Item component

// Functional component for the list of items
function ItemList({ items, togglePurchased, deleteItem }) {
  return (
    <ul className="item-list">
      {/* Map through the items array */}
      {items.map(item => (
        <Item
          key={item.id} // Unique key for each item
          item={item}
          togglePurchased={togglePurchased}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
}

export default ItemList;