import { useEffect, useState } from "react";
import "./numeros.css"
import Display from "./display"

function Numero(){

    // Sale los numeros 
    const [numero, setnumero] = useState('')
    const [antes, setantes] = useState('')
    const [operator, setoperator] = useState('')

    const [arraynum, setarraynum] = useState([
        '#1a1a1a', '#1a1a1a', '#1a1a1a', '#1a1a1a', '#1a1a1a', '#1a1a1a', '#1a1a1a', '#1a1a1a', '#1a1a1a', '#1a1a1a',
        '#1a1a1a', '#1a1a1a', '#1a1a1a',  '#1a1a1a',  '#1a1a1a',  '#1a1a1a',  '#1a1a1a',  '#1a1a1a',  '#1a1a1a'
    ])

    const handleKeyPress  = (event) => {
        console.log(event.key)
        console.log(event.target.id)
        for(let i = 0; i < arraynum.length;i++){
            arraynum[i] = '#1a1a1a'
        }
        let num = ''
        const pressedKey = parseInt(event.key);
        if (!isNaN(pressedKey) && pressedKey >= 0 && pressedKey <= 9) {
            arraynum[pressedKey] = '#414141'
            if ( numero.toString().length  < 9 ){
                setnumero( (numero + pressedKey.toString()) );
                
            }
        }
        if (event.key === 'Backspace' ){
            for (let i = 0; i < (numero.toString().length -1); i++){
                num = num + numero.toString().split("")[i]
            }
            setnumero( num );
            arraynum[10] = '#414141'
        }
        if (event.key === '+' ){
            setoperator( event.key )
            setantes(numero)
            setnumero('')
            arraynum[12] = '#414141'
        }
        if (event.key === '*' ){
            setoperator( event.key )
            setantes(numero)
            setnumero('')
            arraynum[13] = '#414141'
        }
        if (event.key === '-' ){
            setoperator( event.key )
            setantes(numero)
            setnumero('')
            arraynum[14] = '#414141'
        }
        if (event.key === '/' ){
            setoperator( event.key )
            setantes(numero)
            setnumero('')
            arraynum[15] = '#414141'
        }
        if (event.key === '.' ){
            arraynum[18] = '#414141'
            let estado = false
            for (let i = 0; i < numero.toString().length; i++){
                if( numero.toString().split("")[i] === '.'){
                    estado = true
                }
            }
            if( estado === false ){
                setnumero( numero + event.key);
            }
        }
        if (event.key === '=' || event.key === 'Enter' ){
            arraynum[16] = '#414141'
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
        if( numero.length <= 8){
            setnumero( (parseFloat(numero) * -1).toString() )
        } 
        else{
            setnumero( 'Syntax Lenght' );
        }
            
    };

    const handleporc = () => {
        if((parseFloat(numero) * 0.01).toString().length < 9){
            setnumero( (parseFloat(numero) * 0.01).toString() )
        }
        else{
            setnumero( 'Syntax Lenght')
        }  
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

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
        
    }, [numero]); 


    return (
        <>
        <Display numero={numero} />

        <div className="particion">

        <div className="butons">
        <button className="estilobuton" id='7' style={{backgroundColor:arraynum[7]}} onClick={handleClick}>7</button>
        <button className="estilobuton" id='8' style={{backgroundColor:arraynum[8]}} onClick={handleClick}>8</button>
        <button className="estilobuton" id='9' style={{backgroundColor:arraynum[9]}} onClick={handleClick}>9</button>
        <button className="estilobuton" id='4' style={{backgroundColor:arraynum[4]}} onClick={handleClick}>4</button>
        <button className="estilobuton" id='5' style={{backgroundColor:arraynum[5]}} onClick={handleClick}>5</button>
        <button className="estilobuton" id='6' style={{backgroundColor:arraynum[6]}} onClick={handleClick}>6</button>
        <button className="estilobuton" id='1' style={{backgroundColor:arraynum[1]}} onClick={handleClick}>1</button>
        <button className="estilobuton" id='2' style={{backgroundColor:arraynum[2]}} onClick={handleClick}>2</button>
        <button className="estilobuton" id='3' style={{backgroundColor:arraynum[3]}}  onClick={handleClick}>3</button>
        <button className="cerounique" id='0' style={{backgroundColor:arraynum[0]}} onClick={handleClick}>0</button>
        <button className="punto" id='.' style={{backgroundColor:arraynum[18]}} onClick={handleClickpunto}>.</button>
        </div>

        <div className="operacion">
        <button className="deleteunique" id='DEL' style={{backgroundColor:arraynum[10]}} onClick={handlelete}>DEL</button>
        <button className="porc" id='%' style={{backgroundColor:arraynum[11]}} onClick={handleporc}>%</button>
        <button className="sumaunique" id='+' style={{backgroundColor:arraynum[12]}} onClick={handlesuma}>+</button>
        <button className="multiunique" id='*' style={{backgroundColor:arraynum[13]}} onClick={handlemulti}>*</button>
        <button className="restaunique" id='-' style={{backgroundColor:arraynum[14]}} onClick={handleresta}>-</button>
        <button className="diviunique" id='/' style={{backgroundColor:arraynum[15]}} onClick={handlediv}>/</button>
        <button className="igualjsjsj" id='=' style={{backgroundColor:arraynum[16]}} onClick={handleigual}>=</button>
        <button className="convert" id='+/-' style={{backgroundColor:arraynum[17]}} onClick={handlemasmenos}>+/-</button>
        </div>

        </div>

        </>

    )
    
}


export default Numero;