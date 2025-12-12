import { useEffect, useRef, useState, useContext, createContext } from "react";
import { Router, Routes, Route } from 'react-router-dom'
import Dominoz from "./pages/Dominoz"

function ClipboardExample() {
  const handleCopy = () => alert('Text copied!');
  return <input onCopy={handleCopy} placeholder="Try copying this text" />;
}

const UserContext = createContext()
function App() {

  const [user] = useState('Blank')


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


      <UserContext.Provider value={user}>
        <Intermediate />
      </UserContext.Provider>

    </div>


  )
}

function UseEffectPrac() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setUsers(json))
  }, [])

  return (
    <div className="">
      <h2>
        User List
      </h2>
      <h6>{console.log(users)}</h6>
      {users.map((u) => (
        <li key={u.id}>{u.id} - {u.name}</li>
      ))}
    </div>
  )
}

function Refprac1() {
  const countRef = useRef(0)

  function handleClick() {
    countRef.current += 1;
    alert(`You clicked ${countRef.current} times!`)
  }
  return <button onClick={handleClick}>Click me!</button>
}

function Refprac2() {
  const [inputValue, setInputValue] = useState('')
  const previousValue = useRef('')

  useEffect(() => {
    previousValue.current = inputValue
  }, [inputValue])

  return (
    <>
      <input type="text" value={inputValue}
        onChange={e => setInputValue(e.target.value)} />
    </>
  )
}


function Intermediate() {
  return <DeepChild />
}
function DeepChild() {
  const user = useContext(UserContext)
  return <div>Deep Child User: {user}</div>
}

export default App


function PageRender() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about:users" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}