import { useRef } from "react"

export default function TextAreaRef() {
    const textareaRef = useRef(null)

    function handClick() {
        textareaRef.current.value = "The quick brown fox jumps over the lazy dog"
        textareaRef.current.focus()
    }
    return (
        <>
            <button onClick={handClick}>Action</button>
            <textarea ref={textareaRef} />
        </>
    )
}