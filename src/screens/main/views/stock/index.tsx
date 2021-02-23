import React from 'react'
import style from './style.module.css'
import useStock from './useStock'

export default function Stock(props:any){
    const {} = useStock(props)
    return(
        <div className={style.stock}>
            <div>Stock</div> 
        </div>
    )
}