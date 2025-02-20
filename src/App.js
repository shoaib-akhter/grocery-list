import React, { useState } from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList'; // Import ItemList component

function App() {
  // State to manage the list of items
  const [items, setItems] = useState([]);

  // Function to add a new item
  const addItem = (text) => {
    const newItem = {
      id: Date.now(), // Unique ID for each item
      text, // Item text
      purchased: false // Initial state (not purchased)
    };
    setItems([...items, newItem]); // Add new item to the list
  };

  // Function to toggle purchased status
  const togglePurchased = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    ));
  };

  // Function to delete an item
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id)); // Remove item from the list
  };

  return (
    <div className="app">
      {/* Render the Header component */}
      <Header />
      {/* Render the AddItem component and pass the addItem function as a prop */}
      <AddItem addItem={addItem} />
      {/* Render the ItemList component and pass necessary props */}
      <ItemList
        items={items}
        togglePurchased={togglePurchased}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;