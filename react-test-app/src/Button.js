export const Button = (props) => {

    /*
    const pressed = () => {
        alert('presionado!!!')
    }
    */

    return (
        <button onClick={props.onPress}>{ props.name }</button>
    )
}