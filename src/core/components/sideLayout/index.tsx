import React from 'react'
import style from './style.module.css'
import useSideLayout from './useSideLayout'

export default function SideLayout(props:any){
    const {} = useSideLayout(props)
    return(
        <div className={style.sideLayout}>
            <div>SideLayout</div> 
        </div>
    )
}