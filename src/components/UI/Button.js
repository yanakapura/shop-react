import './Button.scss'

const Button = (props) => {
    return <button className={"btn btn-round " + props.className} onClick={props.onClick}><span className='btn__content'>{props.children}</span></button>
}
export default Button

export const ButtonHeader = (props) => {
    return <button className={"btn " + props.className} onClick={props.onClick}>{props.children}</button>
}
