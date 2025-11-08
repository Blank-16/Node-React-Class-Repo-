Event Handling in React


In React, various types of events are used to interact with user actions or system events. These events are normalized across browsers through React's SyntheticEvent system. They can be broadly categorized into several types based on the kind of interaction.
1. Mouse Events
Mouse events are triggered by user interactions with the mouse (clicking, hovering, etc.).
        onClick: Fired when an element is clicked.
        onDoubleClick: Fired when an element is double-clicked.
        onMouseDown: Fired when the mouse button is pressed down.
        onMouseUp: Fired when the mouse button is released.
        onMouseMove: Fired when the mouse pointer is moving over an element.
        onMouseEnter: Fired when the mouse pointer enters an element.
        onMouseLeave: Fired when the mouse pointer leaves an element.
        onMouseOver: Fired when the mouse pointer is moved onto an element or its child elements.
        onMouseOut: Fired when the mouse pointer is moved off an element or its child elements.
Example:-
<button onClick={() => alert('Button clicked!')}>Click Me</button>

function App() {
  const handleClick = (event) => {
    console.log(event); 
    console.log(event.target); 
  };
  return (
    <button onClick={handleClick}>Click Me</button>
  );
}



2. Keyboard Events
Keyboard events are triggered when users interact with the keyboard.
            onKeyDown: Fired when a key is pressed down.
            onKeyPress: Fired when a key that produces a character value is pressed.
            onKeyUp: Fired when a key is released.
Example:-
<input onKeyDown={(e) => console.log(`Key pressed: ${e.key}`)} />

3. Form Events

These events handle user interactions with forms and their elements like input fields, text areas, etc.
            onChange: Fired when the value of an input element changes (used for inputs, textareas, select elements).
            onInput: Fired when an element receives user input (generally for input elements).
            onSubmit: Fired when a form is submitted.
            onReset: Fired when a form is reset.
            onInvalid: Fired when a form element is invalid.
Example: 
<form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
  <input type="text" onChange={(e) => console.log(e.target.value)} />
  <button type="submit">Submit</button>
</form>

4. Focus Events

Focus events are triggered when an element gains or loses focus.
            onFocus: Fired when an element gains focus.
            onBlur: Fired when an element loses focus.
Example:- <input onFocus={() => console.log('Input focused')} onBlur={() => console.log('Input blurred')} />

5. Touch Events
Touch events are triggered by touch-screen interactions (on mobile devices).
        onTouchStart: Fired when a touch point is placed on the touch surface.
        onTouchMove: Fired when a touch point is moved along the touch surface.
        onTouchEnd: Fired when a touch point is removed from the touch surface.
        onTouchCancel: Fired when a touch event is canceled.
Example:- <div onTouchStart={() => console.log('Touched!')}>Touch Me</div>

6. Clipboard Events

Clipboard events are triggered by actions related to the system clipboard, like copy, cut, and paste.
        onCopy: Fired when content is copied.
        onCut: Fired when content is cut.
        onPaste: Fired when content is pasted.
Example:
<textarea onCopy={() => console.log('Content copied!')}></textarea>



7. Form Input Events

These events are specific to form controls and input handling.
        onInput: Fired when the value of an input element changes.
        onSelect: Fired when some text inside an input or textarea is selected.
Example:- <textarea onSelect={(e) => console.log(e.target.value.substring(e.target.selectionStart, e.target.selectionEnd))}></textarea>



8. Drag Events
Drag events are triggered when an element is dragged and dropped.
        onDrag: Fired repeatedly while an element is being dragged.
        onDragStart: Fired when the user starts dragging an element.
        onDragEnd: Fired when the user finishes dragging an element.
        onDragOver: Fired when a dragged element is over a valid drop target.
        onDrop: Fired when an element is dropped on a valid drop target.
Example: <div draggable="true" onDragStart={() => console.log('Drag started')}>Drag Me</div>

9. Wheel Events
These events are triggered when the user scrolls the mouse wheel.
        onWheel: Fired when the mouse wheel is scrolled.
Example:- <div onWheel={(e) => console.log(`Scrolled: ${e.deltaY}`)}>Scroll Me</div>

10. Media Events
These events are associated with media elements like <audio> and <video>.
        onPlay: Fired when the media starts playing.
        onPause: Fired when the media is paused.
        onEnded: Fired when playback of media has ended.
        onVolumeChange: Fired when the volume is changed.
Example:
<video onPlay={() => console.log('Playing')} onPause={() => console.log('Paused')} controls>
  <source src="movie.mp4" type="video/mp4" />
</video>

11. Image Events
These events are specific to media and image elements.
        onLoad: Fired when an image or media file has finished loading.
        onError: Fired when an error occurs during media or image loading.
Example:- <img src="image.jpg" onLoad={() => console.log('Image loaded')} onError={() => console.log('Error loading image')} />

12. Animation Events
These events handle CSS animations.
        onAnimationStart: Fired when a CSS animation starts.
        onAnimationEnd: Fired when a CSS animation ends.
        onAnimationIteration: Fired when a CSS animation iteration is completed.
Example:
<div onAnimationEnd={() => console.log('Animation ended')}>Animated Div</div>

13. Transition Events
These events are triggered during CSS transitions.
        onTransitionEnd: Fired when a CSS transition ends.
Example:
<div onTransitionEnd={() => console.log('Transition ended')}>Transitioning Div</div>

14. Other Events
        onScroll: Fired when the user scrolls an element.
        onContextMenu: Fired when the user right-clicks to open the context menu.
        onResize: Fired when the window is resized (applicable only on the window object).
Example for scrolling:
<div onScroll={() => console.log('Scrolling')} style={{ overflowY: 'scroll', height: '100px' }}>
  <div style={{ height: '300px' }}>Scroll me</div>
</div>


Just like HTML DOM events, react can perform actions based on user events.
React has the same events as HTML but with a few key differences.
  
  React provides a way to handle events in a declarative way, and events in React are normalized across different browsers to ensure consistency.


Basic Event Handling Syntax

import React from 'react';
function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default App;


*******************************************************
Synthetic Events


React uses a system called Synthetic Events to handle events. 

These synthetic events are wrappers around native browser events and work consistently across different browsers.

The event object is passed as an argument to the event handler.

function App() {
  const handleClick = (event) => {
    console.log(event); 
    console.log(event.target); 
  };
  return (
    <button onClick={handleClick}>Click Me</button>
  );
}


***************************************************************
Passing Parameters to Event Handlers
You can pass additional arguments to the event handler by wrapping the handler inside another function.
function App() {
  const handleClick = (message) => {
    alert(message);
  };
  return (
    <button onClick={() => handleClick('Hello from the button!')}>Click Me</button>
  );
}

*************************************************************************
Commonly Used Event Handlers
Here are some common event handlers in React:

onClick: Handles click events.
onChange: Handles changes to input fields.
onSubmit: Handles form submissions.
onKeyPress: Handles keyboard key presses.
function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input type="text" onChange={handleChange} />
  );
}


******************************************************************
Handling Events in Class Components
import React, { Component } from 'react';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert('Button clicked in class component!');
  }
  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>
    );
  }
}
export default App;

*****************************************************************
Prevent Default Behavior
In React, you can call event.preventDefault() to stop the default behavior of an element.
function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}



**********************************************************
Handling Events with Hooks
For functional components, React's Hooks like useState or
 useEffect can be used to handle more complex event-driven logic.


import React, { useState } from 'react';
function App() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Current value: {inputValue}</p>
    </div>
  );
} export default App;



***********************************************************

Event Pooling

React optimizes event handling by reusing the event objects across multiple events for performance reasons. This process is called "event pooling". If you need to access the event object asynchronously (like inside a setTimeout or a promise), you'll need to call event.persist().
function App() {
  const handleClick = (event) => {
    event.persist(); 
    setTimeout(() => {
      console.log(event.type); 
    }, 1000);
  };
  return (
    <button onClick={handleClick}>Click Me</button>
  );
}



*************************************************************
Stateless components, also called presentational components or dumb components, do not manage or maintain their own state. They receive data and behavior via props and are responsible solely for rendering content based on that input.
Characteristics:
No internal state management.
Pure functions: Given the same input (props), they always render the same output.
They rely entirely on props for data and behavior.
Typically focused on rendering UI, without side effects.
Advantages:
Simpler and easier to maintain.
More reusable, as they rely on props rather than internal logic.
Easier to test due to their deterministic nature.
Example:-
const StatelessComponent = ({ message }) => {
  return <div>{message}</div>;
};





Stateful components, also known as container components or smart components, maintain their own internal state and can update that state based on user actions or other events.

 They are responsible not only for rendering UI but also for handling logic, state updates, and potentially side effects like fetching data.
Characteristics:
Maintain and manage their own state using hooks like useState (in functional components) or this.state (in class-based components).
Can handle user input, network requests, and other interactions that require dynamic state changes.
Typically interact with stateless components by passing down state as props.
Advantages:
Can handle more complex logic and behavior.
Useful for components that need to handle events or manage dynamic content.


import React, { useState } from 'react';
const Statefull = () => {
    const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Button clicked {count} times</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default Statefull;









