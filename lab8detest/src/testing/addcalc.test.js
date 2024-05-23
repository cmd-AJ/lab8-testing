
import { describe, it, expect } from 'vitest'
import {del, masmenos, operaciones, porcen, puntos } from './calcul'

describe('Operaciones de dos numeros max 9 caracteres', () => {
  it('resta simple pero para probar que los demas operadores si funcionan caracteres', () => {
    expect(operaciones('10', '-' ,'9')).toEqual(1)
  })
  it('multiplicacion simple pero se pasa de mas de 9 caracteres', () => {
    expect(operaciones('1000000000', '*' ,'2')).toEqual('Syntax Lenght')
  })
  it('suma simple pero se pasa de mas de 9 caracteres', () => {
    expect(operaciones('300000000', '+' ,'923456781')).toEqual('Syntax Lenght')
  })
})

describe('Al momento de agregar un punto no debe de haber 2 puntos', () => {
  it('Tengo un numero punto decimal y quiero agregar otro decimal', () => {
    expect(puntos('10.4', '.')).toEqual('10.4')
  })
  it('Quiero agregar un punto decimal a mi numero', () => {
    expect(puntos('104', '.')).toEqual('104.')
  })
  it('En decimales se debe de poner el punto', () => {
    expect(puntos('0.3' ,'.')).toEqual('0.3')
  })
})


describe('Se desea eliminar una operacion', () => {
  it('elimino un digito y remplazo por otro', () => {
    expect(del('10.4') + '0').toEqual('10.0')
  })
  it('Si elimino un 0 decimal no elimina los valores enteros', () => {
    expect( del(del('1.0')) ).toEqual('1')
  })
  it('Realizo una operacion combinada pero no me sale lo que espera por lo tanto borro los digitos', () => {
    expect( del( operaciones('10', '-' ,'9') ) ).toEqual('')
  })
})

describe('Como deberia de funcionar el mas menos', () => {
  it('Cambiar el signo de un valor', () => {
    expect(masmenos('0.1')).toEqual('-0.1')
  })
  it('Si hay un mayor cantidad de decimales y lo quiero cambiar a otro valor', () => {
    expect( masmenos('0.0000000004') ).toEqual('Syntax Lenght')
  })
  it('Si alcanza mas de 9 digitos', () => {
    expect( masmenos('100000000')  ).toEqual('Syntax Lenght')
  })
})

describe('Se implementa la funcion de porcentaje', () => {
  it('Tengo un numero decimal y ponerlo a porcentaje', () => {
    expect(porcen('0.1')).toEqual('0.001')
  })
  it('Si hay 9 digitos y se crea el porcentaje tendra que hacer error', () => {
    expect( porcen('100000000') ).toEqual('Syntax Lenght')
  })
  it('Si tengo ceros no se tendra que poner los decimales?', () => {
    expect( porcen('10000')  ).toEqual('100')
  })
})

describe('Revisar periocidad', () => {
  it('Si divido 22/7', () => {
    expect(operaciones('22', '/', '7')).toEqual('3.1428571')
  })
})





