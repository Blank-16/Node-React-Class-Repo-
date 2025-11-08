import Dominoz from "./pages/Dominoz"

function ClipboardExample() {
  const handleCopy = () => alert('Text copied!');
  return <input onCopy={handleCopy} placeholder="Try copying this text" />;
}


function App() {
  return (
    <div>
      <hr />
      <input type="text" onKeyDown={(e) => console.log(`key pressed ${e.key}`)} />
      <hr />
      <form action="" onSubmit={(e) => { e.preventDefault(); alert(`Form Submitted!`) }}>
        <input type="text" onChange={(e) => { e.target.value }} />
        <button type="submit">Submit</button>
      </form>
      <ClipboardExample />
      <hr />
      <textarea name="" onSelect={(e) => console.log(e.target.value.substring(e.target.selectionStart, e.target.selectionEnd))} id=""></textarea>
    </div>
  )
}


export default App