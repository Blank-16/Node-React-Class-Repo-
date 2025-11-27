import { useState, useCallback } from "react";
import Child from "./Child";

export default function Parent() {
    const [count, setCount] = useState(0)

    const handClick = useCallback(() => {
        console.log("Button Clicked")
    }, [])

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Parent Button</button>
            <Child click={handClick} />
        </div>
    )

}