import React from 'react'
import style from './style.module.css'
import useOperations from './useOperations'

export default function Operations(props:any){
    const {} = useOperations(props)
    return(
        <div className={style.operations}>
            <div>Operations</div> 
        </div>
    )
}