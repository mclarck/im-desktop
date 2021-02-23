import React from 'react'
import style from './style.module.css'
import useStatusBar from './useStatusBar'

export default function StatusBar(props:any){
    const {} = useStatusBar(props)
    return(
        <div className={style.statusBar}>
            <div>StatusBar</div> 
        </div>
    )
}