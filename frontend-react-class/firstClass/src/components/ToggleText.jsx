
import React, { useState } from 'react'

function ToggleText() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"} Text
            </button>
            {isVisible && <p>This is a secret message</p>}
        </div>
    )
}

export default ToggleText