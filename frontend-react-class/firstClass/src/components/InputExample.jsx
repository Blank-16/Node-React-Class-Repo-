import { useState } from "react";

export default function InputExample() {
    const [name, setName] = useState("")

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type Name" />
            <p>Hello, {name || "guest"}</p>
        </div>
    )
}