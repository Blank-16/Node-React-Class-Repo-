import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count+1)
    }
    const decrease = () => {
        setCount(count-1)
    }

    return(
        <div>
            <h2>Count : : {count}</h2>
            <div className="flex gap-5">
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </div>
        </div>
    )
}