import { useEffect, useState } from "react";
import "./numeros.css"
import Display from "./display"

function Numero(){

    // Sale los numeros 
    const [numero, setnumero] = useState('')
    const [antes, setantes] = useState('')
    const [operator, setoperator] = useState('')
    

    const handleKeyPress = (event) => {
        console.log(event.key)
        let num = ''
        const pressedKey = parseInt(event.key);
        if (!isNaN(pressedKey) && pressedKey >= 0 && pressedKey <= 9) {
            if ( numero.toString().length  < 9 ){
                setnumero( (numero + pressedKey.toString()) );
            }
        }
        if (event.key === 'Backspace' ){
            for (let i = 0; i < (numero.toString().length -1); i++){
                num = num + numero.toString().split("")[i]
            }
            setnumero( num );
        }
        if (event.key === '+' ){
            setoperator( event.key )
            setantes(numero)
            setnumero('')
        }
        if (event.key === '*' ){
            setoperator( event.key )
            setantes(numero)
            setnumero('')
        }
        if (event.key === '-' ){
            setoperator( event.key )
            setantes(numero)
            setnumero('')
        }
        if (event.key === '/' ){
            setoperator( event.key )
            setantes(numero)
            setnumero('')
        }
        if (event.key === '=' || event.key === 'Enter' ){
            const res = eval( antes + ' ' + operator + ' ' + numero )
            if( res.toString().length < 10 ){
                setnumero(eval( antes + operator + numero ))
            }
            else{
                if( res < 1 ){
                    let num = ''
                    console.log(res)
                    for (let i = 0; i < 9; i++){
                        console.log(num)
                        num = num + res.toString().split("")[i]
                    }
                    setnumero( num );
                }
                else{
                    setnumero( 'Syntax Lenght' );
                }
                    
            }
            
            setantes('')
            setoperator('')
        }
        

    };

    const handleClick = (event) => {
        if ( numero.toString().length  < 9 ){
            setnumero( (numero + event.target.textContent) );
        }
        
    };

    const handleClickpunto = (event) => {
        let estado = false
        for (let i = 0; i < numero.toString().length; i++){
            if( numero.toString().split("")[i] === '.'){
                estado = true
            }
        }
        if( estado === false ){
            setnumero( numero + event.target.textContent );
        }


    };


    const handlelete = () => {
        let num = ''
        for (let i = 0; i < (numero.toString().length -1); i++){
            num = num + numero.toString().split("")[i]
        }
        setnumero( num );
    };

    const handlesuma = (event) => {
        setoperator( event.target.textContent )
            setantes(numero)
            setnumero('')
    };

    const handleresta = (event) => {
        setoperator( event.target.textContent )
            setantes(numero)
            setnumero('')
    };

    const handlemulti = (event) => {
        setoperator( event.target.textContent )
            setantes(numero)
            setnumero('')
    };

    const handlemasmenos = () => {
        setnumero( (parseFloat(numero) * -1).toString() )
            
    };

    const handleporc = () => {
        setnumero( (parseFloat(numero) * 0.01).toString() )
            
    };

    const handlediv = (event) => {
        setoperator( event.target.textContent )
            setantes(numero)
            setnumero('')
    };

    const handleigual = () => {
        const res = eval( antes + ' ' + operator + ' ' + numero )
            if( res.toString().length < 10 ){
                setnumero(eval( antes + operator + numero ))
            }
            else{
                if( res % 1 !== 0 ){
                    let num = ''
                    console.log(res)
                    for (let i = 0; i < 9; i++){
                        console.log(num)
                        num = num + res.toString().split("")[i]
                    }
                    setnumero( num );
                }
                else{
                    setnumero( 'Syntax Lenght' );
                }
                    
            }
            
            setantes('')
            setoperator('')
    };




    useEffect(() => {
        // Add event listener for key presses when the component mounts
        window.addEventListener('keydown', handleKeyPress);
        // Clean up event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
        
    }, [numero]); // Add numero to the dependency array to avoid adding/removing the event listener unnecessarily



    return (
        <>
        <Display numero={numero} />

        <div className="particion">

        <div className="butons">
        <button className="estilobuton" onClick={handleClick}>7</button>
        <button className="estilobuton" onClick={handleClick}>8</button>
        <button className="estilobuton" onClick={handleClick}>9</button>
        <button className="estilobuton" onClick={handleClick}>4</button>
        <button className="estilobuton" onClick={handleClick}>5</button>
        <button className="estilobuton" onClick={handleClick}>6</button>
        <button className="estilobuton" onClick={handleClick}>1</button>
        <button className="estilobuton" onClick={handleClick}>2</button>
        <button className="estilobuton" onClick={handleClick}>3</button>
        <button className="cerounique" onClick={handleClick}>0</button>
        <button className="punto" onClick={handleClickpunto}>.</button>
        </div>

        <div className="operacion">
        <button className="deleteunique" onClick={handlelete}>DEL</button>
        <button className="porc" onClick={handleporc}>%</button>
        <button className="sumaunique" onClick={handlesuma}>+</button>
        <button className="multiunique" onClick={handlemulti}>*</button>
        <button className="restaunique" onClick={handleresta}>-</button>
        <button className="diviunique" onClick={handlediv}>/</button>
        <button className="igualjsjsj" onClick={handleigual}>=</button>
        <button className="convert"onClick={handlemasmenos}>+/-</button>
        </div>

        </div>

        </>

    )
    
}


export default Numero;