export const operaciones = (antes, operator ,numero) => {
    let num = ''
    const res = eval( antes + ' ' + operator + ' ' + numero )
            if( res.toString().length < 10 ){
                num = eval( antes + operator + numero )
            }
            else{
                if( res % 1 !== 0 ){
                    for (let i = 0; i < 9; i++){
                        console.log(num)
                        num = num + res.toString().split("")[i]
                    }
                }
                else{
                    num = 'Syntax Lenght';
                }
                    
            }
    return num;
}
  


export const puntos = ( numero,event) => {
    let num = ''
    let estado = false
    for (let i = 0; i < numero.toString().length; i++){
        if( numero.toString().split("")[i] === '.'){
            estado = true
            num = numero
        }
    }
    if( estado === false ){
        num = ( numero + event );
    }
    return num;

};


export const del = ( numero) => {
    let num = ''
        for (let i = 0; i < (numero.toString().length -1); i++){
            num = num + numero.toString().split("")[i]
        }
    return num;

};


export const masmenos = ( numero) => {
    let num = ''
    if( numero.length <= 8){
        num = ( (parseFloat(numero) * -1).toString() )
    } 
    else{
        num = ( 'Syntax Lenght' );
    }
    return num;

};

export const porcen = ( numero) => {
    let num = ''
    if( numero.length <= 8){
        num = (parseFloat(numero) * 0.01).toString()
    } 
    else{
        num = ( 'Syntax Lenght' );
    }
    return num;

};
