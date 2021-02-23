import React from 'react'
import style from './style.module.css'
import useClient from './useClient'

export default function Client(props:any){
    const {} = useClient(props)
    return(
        <div className={style.client}>
            <div>Client</div> 
        </div>
    )
}