import React, { useState } from "react"; // Import useState hook

// Functional component for adding items
function AddItem ({ addItem }) {
    // State for input value
    const [newItem, setNewItem] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();             // Prevent page reload
        if (!newItem.trim()) return;    // Prevent empty submissions 
        addItem(newItem);               // Pass the new item to parent component
        setNewItem('');                 // Clear the input field
    };

    return (
        <form onSubmit={handleSubmit} className="add-item-form">
          {/* Input field for new item */}
          <input
            type="text"
            value={newItem} // Controlled input (value tied to state)
            onChange={(e) => setNewItem(e.target.value)} // Update state on change
            placeholder="Add milk..."
            aria-label="Add a new grocery item"
          />
          {/* Submit button */}
          <button type="submit">Add</button>
        </form>
    );
}

// Export the component for use in other files
export default AddItem;