import React, { useReducer, useRef } from 'react';

const initialList = [];
function listReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: Date.now(), name: action.name }];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

export default function ShoppingList() {
  const [items, dispatch] = useReducer(listReducer, initialList);
  const inputRef = useRef();
  function handleAdd(e) {
    e.preventDefault();
    if (inputRef.current.value.trim()) {
      dispatch({ type: 'ADD_ITEM', name: inputRef.current.value });
      inputRef.current.value = '';
    }
  }
  return (
    <form onSubmit={handleAdd}>
      <input ref={inputRef} />
      <button type="submit">Add</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>Remove</button>
          </li>
        ))}
      </ul>
    </form>
  );
}