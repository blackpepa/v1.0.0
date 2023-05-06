import React from 'react'

export const ItemCount = ({max, cantidad, modify}) => {


    const sumar = () =>{
        if(cantidad  <max){
        modify(cantidad +1)
        }
    }
    const restar =() =>{
        if (cantidad >0){
            modify(cantidad -1)            
        }
    }

    return(
        <>
            <p>{cantidad} </p>
        <div>
            <button onClick={sumar}>➕</button>
            <button onClick={restar}>➖</button>
        </div>
        </>
    )
}