import React, { useState, useEffect } from 'react';
import SharedLogic from './SharedLogic';

const Test1 = () => {
  const [items, setItems] = useState([
    { id: 1, test2: false },
    { id: 2, test2: true },
    { id: 3, test2: false },
    { id: 4, test2: false },
  ]);

  Load deleted items from local storage when component mounts
  useEffect(() => {
    const deletedIds = JSON.parse(localStorage.getItem('deletedIds')) || [];
    setItems(prevItems => prevItems.filter(item => deletedIds.includes(item.id)));
  }, []);

  const deleteButton = (id) => {
    // Get the current list of deleted IDs from local storage
    const deletedIds = JSON.parse(localStorage.getItem('deletedIds')) || [];

    // Add the new deleted ID to the list
    deletedIds.push(id);
    localStorage.setItem('deletedIds', JSON.stringify(deletedIds));

    // Update the state to remove the deleted item
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <div>
        <div className="d-container">
          {items.map((item) => (
            <div key={item.id} className="card">
              <p>test</p>
              <img src="https://via.placeholder.com/300x200" alt="Card" />
              <div>id={item.id}</div>
              <span>
                <h1 style={{ display: 'inline-block' }}>Test1: </h1>
                <SharedLogic item={item} deleteButton={deleteButton} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Test1;
