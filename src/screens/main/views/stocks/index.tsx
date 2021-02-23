import React from 'react'
import style from './style.module.css'
import useStocks from './useStocks'

export default function Stocks(props:any){
    const {} = useStocks(props)
    return(
        <div className={style.stocks}>
            <div>Stocks</div> 
        </div>
    )
}