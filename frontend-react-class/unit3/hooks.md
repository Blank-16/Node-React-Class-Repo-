Hooks are a feature in React that allow you to use state and other React features without writing a class.
It does not work inside class.
Hooks should always be used at the top level of the react function.

Basic Hooks
    useState
    useEffect
    useContext
    useReducer
    useMemo
    useCallback
    useRef
    useImperativeHandle
    useLayoutEffect
    useDebugValue
***********************************************************************
useState

useState is a Hook that lets you add state to functional components. 

Before Hooks, state could only be used in class components, but useState allows you to use state in functional components, making them more powerful and flexible.

import React, { useState } from 'react';

Example 1:

import React,{useState} from 'react';
const Hook=()=>{
    
const[count,setCount]=useState(0);
   
const Increment=()=>
{
    setCount(count+1)
}
const Decrement=()=>
{
    setCount(count-1)
}
    return(
        <>
<div >
<p>{count}</p>
<button onClick={Increment}>Increment</button>
<button onClick={Decrement}>Decrement</button>
</div>
        </>
    );
}
export default Hook;

Example 2  Registration form
import React,{useState} from 'react';
function Registration(){
    const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    
    alert(`Name: ${name}, Age: ${age}`);
  };
    return(
<>
<form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
      
  />
      </label>
      <br />
      <label>
        Age:
        <input 
          type="number" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>


</>
    );
}
export default Registration;

*****************************************************
The useEffect in ReactJS is used to handle the side effects such as fetching data and updating DOM. 
By default, this function runs after every render of the component.

useEffect hook is used to handle side effects in functional components, such as fetching data, updating the DOM, and setting up subscriptions or timers.

The effect will only run again if any of the values in the dependency array change.

useEffect(()=>{

return()=>{

};

},[dependencies]);


without useEffect
import React,{useState} from 'react';
function Useeffect(){
    const [num,setNum]=useState(0);
    // useEffect(()=>{
    //     alert("clicked")
    // })

    return(
    <button onClick={(()=>setNum(num+1),()=>{alert("clicked")} )}> click me {num}</button>
    );
};
export default Useeffect;


with useEffect

import React,{useState,useEffect} from 'react';
function Useeffect(){
    const [num,setNum]=useState(0);
    useEffect(()=>{
        alert("clicked")
    })

    return(
    <button onClick={(()=>setNum(num+1),()=>{alert("clicked")} )}> click me {num}</button>
    );
};
export default Useeffect;


Example 2


import React,{useState,useEffect} from 'react';
const Hook=()=>{
    
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Document mount")
    },[]);

  useEffect(()=>{
       console.log(`You clicked ${count} times`)
    },[count]);   
const Increment=()=>
{
    setCount(count+1)
}

const Decrement=()=>
{
    setCount(count-1)
}
    return(
        <>
<div >
<p>{count}</p>
<button onClick={Increment}>Increment</button>
<button onClick={Decrement}>Decrement</button>
</div>
        </>
    );
}
export default Hook;

************************************************************
use Context is a React hook that allows you to access values from a React Context in a functional component, without needing to pass props down manually through every level of the component tree.

Context Works:
 createContext(): First, you create a context object using createContext().
  This context will hold the values you want to share across components.

    Provider: You wrap the components that need access to this context in a provider component (Context.Provider). The provider supplies the value(s) you want the components to have access to.

       useContext: This hook allows any child component of the provider to consume (access) the context value, without passing props.

Example:-

import React, { useState, createContext, useContext } from "react";
// Create Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLight = theme === 'light';
 return (
    <div
      style={{
        backgroundColor: isLight ? '#fff' : '#333',
        color: isLight ? '#000' : '#fff',
        padding: 20,
        textAlign: 'center',
      }}
    >
      <h1>{isLight ? 'Light Theme' : 'Dark Theme'}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
function Hook4() {
    return (
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
   );
 }
export default Hook4;




***************************************************************
The useReducer Hook is similar to the useState Hook. It allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
Syntax:
The useReducer Hook accepts two arguments.
useReducer(<reducer>, <initialState>)
The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object. The useReducer Hook returns the current state and a dispatch method. 

import React, { useReducer } from 'react';
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
export default Counter;



**************************************************************
The React useMemo Hook returns a memoized value. The useMemo Hook only runs when one of its dependencies update. This can improve performance. The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.

import React, { useState, useMemo } from 'react';
function expensiveCalculation(num) {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) {}  // Simulate a heavy task
  return num * 2;}
function App1() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const doubledCount = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]); 
  return (
    <div><h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Expensive calculation result (doubled count): {doubledCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
 <input type="text“ value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type something />
      <p>Typed text: {inputValue}</p>
    </div> );}
    
    export default App1;

**************************************************************
In React, useCallback is a hook used to memoize functions. It's primarily used to optimize performance by ensuring that a function is not re-created on every render unless its dependencies change. This can be useful when passing functions to child components, especially if the child components rely on React.memo() for preventing unnecessary re-renders. 

Example 1
import React, { useState, useCallback } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div> <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );   };
export default Counter;



*********************************************************
useRef
Reference hooks are commonly used in React, a popular JavaScript library for building user interfaces, to manage references to DOM elements or values that persist across re-renders.
    useRef: It creates a reference that persists for the entire lifecycle of the component. In example, inputRef is assigned to the ref attribute of the input field.

    Accessing the DOM Element: When you click the button, the handleFocus function is called. It accesses the current property of the ref to focus the input element.

    Re-rendering: Unlike state, updating the ref (inputRef.current) does not cause a re-render of the component. This makes useRef great for managing DOM elements or values that don’t require re-rendering.

Example:-
import React, { useRef } from 'react';
const FocusInput = () => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  }; return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );  };
export default FocusInput;

*****************************************************************
The useImperativeHandle hook in React is used in combination with forwardRef to allow a parent component to access functions or properties from a child component. This is useful when you want to expose certain functions or actions from the child component to the parent.
forwardRef: This allows the CustomInput child component to accept a ref from its parent component (ParentComponent).
useImperativeHandle: This hook is used inside the child component to customize the values or functions that are exposed to the parent. Example: -focus, clear, getValue etc.
inputRef in the Parent: The parent component holds a reference to the child component using the useRef hook. It can call the exposed functions (focus, clear, getValue) via this reference.

Example:-
import React, { useRef, forwardRef, useImperativeHandle, useState } from 'react';
const CustomInput = forwardRef((props, ref) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {inputRef.current.focus(); },
    clear: () => { setValue('');},
    getValue: () => {return value;},
  }));

  return (
    <input ref={inputRef} value={value}
      onChange={(e) => setValue(e.target.value)}
      type="text"placeholder="Type something"/>
 ); });
const ParentComponent = () => { const inputRef = useRef();
  return ( <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <button onClick={() => inputRef.current.clear()}>Clear Input</button>
      <button onClick={() => alert(inputRef.current.getValue())}>Get Value</button> </div>
  );};
  
  export default ParentComponent;


  ************************************************************
  The useLayoutEffect hook in React is similar to useEffect, but it runs synchronously after all DOM mutations and before the browser has a chance to paint. This makes useLayoutEffect useful for tasks like measuring layout, reading or writing directly to the DOM, or synchronously triggering animations. Unlike useEffect, it blocks visual updates until its code has run. Example: Using useLayoutEffect to Measure an Element
  
  import React, { useState, useLayoutEffect, useRef } from 'react';
  const LayoutEffectExample = () => {
    const [boxSize, setBoxSize] = useState({ width: 0, height:0 });
    const boxRef = useRef();
  useLayoutEffect(() => {
      const box = boxRef.current;
      const { width, height } = box.getBoundingClientRect();
      setBoxSize({ width, height });
    }, []); 
    
  return (
      <div><div ref={boxRef} 
          style={{width: '200px',
            height: '200px', 
           backgroundColor: 'lightblue', }}>
          Box</div> <p>The box size is: {boxSize.width}px wide and {boxSize.height}px tall. 
  </p>
  </div>);
  };
  export default LayoutEffectExample;
  
  *************************************************************
  The useDebugValue hook in React is primarily used for debugging custom hooks. It allows you to label and display custom information in React DevTools, which can help with development and tracking hook values during debugging. In normal use, useDebugValue doesn’t affect the component’s behavior but provides better insights when you are working with complex custom hooks.
  
  import { useState, useEffect, useDebugValue } from 'react';
  function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useDebugValue(isOnline ? 'Online' : 'Offline');
    useEffect(() => {
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
  
  
  return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      }; }, []);
    return isOnline;
  }
  const OnlineStatusComponent = () => {
    const isOnline = useOnlineStatus();
    return ( <div><h1>You are currently: {isOnline ? 'Online' : 'Offline'}</h1></div>); };
  export default OnlineStatusComponent;
  
  
  ********************************************************
  Custom Hooks

  Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". Example: useFetch.
  We will use the JSONPlaceholder service to fetch fake data. This service is great for testing applications when there is no existing data. To learn more, check out the JavaScript Fetch API section. Use the JSONPlaceholder service to fetch fake "todo" items and display the titles on the page:
  
  import { useState, useEffect } from "react";
  import ReactDOM from "react-dom/client";
  const Hook11 = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
   }, []);
  return (
      <>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </>
    );
  };
  export default Hook11;
  
   
  







