import React from 'react'
import style from './style.module.scss'
import useStockManager from './useStockManager'

export default function StockManager(props:any){
    const {} = useStockManager(props)
    return(
        <div className={style.stockManager}>
            <div>StockManager</div> 
        </div>
    )
}