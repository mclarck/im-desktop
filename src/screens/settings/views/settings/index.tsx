import React from 'react'
import style from './style.module.scss'
import useSettings from './useSettings'

export default function Settings(props:any){
    const {} = useSettings(props)
    return(
        <div className={style.settings}>
            <div>Settings</div> 
        </div>
    )
}