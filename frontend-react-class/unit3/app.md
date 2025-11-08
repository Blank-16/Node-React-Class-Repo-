function App() {
  const handleClick = (event) => {
    console.log(event); 
    console.log(event.target); 
  };
  return (
    <>
    <button onClick={handleClick}>Click Me</button>
    <input onKeyDown={(e) => console.log(`Key pressed: ${e.key}`)} />
    <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
  <input type="text" onChange={(e) => console.log(e.target.value)} />
  <button type="submit">Submit</button>
</form>

<input onFocus={() => console.log('Input focused')} 
onBlur={() => console.log('Input blurred')} />
<textarea onCopy={() => console.log('Content copied!')}></textarea>

<textarea onSelect={(e) => console.log(e.target.value.substring(e.target.selectionStart, e.target.selectionEnd))}></textarea>

<div draggable="true" onDragStart={() => console.log('Drag started')}>Drag Me</div>

<div onWheel={(e) => console.log(`Scrolled: ${e.deltaY}`)}>Scroll Me</div>
<video onPlay={() => console.log('Playing')} onPause={() => console.log('Paused')} controls>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
</video>

<img src="img1.png" onLoad={() => console.log('Image loaded')} onError={() => console.log('Error loading image')} />
   <div onScroll={() => console.log('Scrolling')} style={{ overflowY: 'scroll', height: '100px' }}>
  <div style={{ height: '300px' }}>Scroll me</div>
</div>
    </>
  );
}
export default App