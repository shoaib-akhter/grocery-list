// App.js
import React, { useState } from 'react'; // Import useState hook
import Header from './components/Header'; // Import Header component
import AddItem from './components/AddItem'; // Import AddItem component

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
    // Update the items array with the new item
    setItems([...items, newItem]);
  };

  return (
    <div className="app">
      {/* Render the Header component */}
      <Header />
      {/* Render the AddItem component and pass the addItem function as a prop */}
      <AddItem addItem={addItem} />
    </div>
  );
}

export default App;