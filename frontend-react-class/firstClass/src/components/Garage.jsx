
function Car(props) {
    return (
        <>
            <h2>I am a {props.brand}</h2>
            <h2>{props.name}</h2>
            <h2>{props.model}</h2>
        </>
    )
}

export default function Garage() {
    return (
        <div>
            <h1>Who lives in my Garage?</h1>
            <Car brand='ford' name='mustang' model='gt' />
        </div>
    )
}