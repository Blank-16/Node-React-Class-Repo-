
import React, { useMemo } from 'react'

function Child({click}) {
    console.log("Child Component")
  return (
    <div>
        <button onClick={click}>Click me</button>
    </div>
  )
}

export default Child