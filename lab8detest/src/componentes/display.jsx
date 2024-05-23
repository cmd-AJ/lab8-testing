
import "./numeros.css"


function Display(props){

    // Sale los numeros 
    return (
        <div className="displanum">
        {props.numero}
        </div>
    )
    
}

export default Display;