export function Boton(props){

    console.log(props)
    return <button className={"btn " + props.color}>Yo soy el boton {props.numero} </button>
}



