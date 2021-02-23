import React from 'react'
import style from './style.module.css'
import useClients from './useClients'

export default function Clients(props:any){
    const {} = useClients(props)
    return(
        <div className={style.clients}>
            <div>Clients</div> 
        </div>
    )
}