import React from 'react'
import style from './style.module.css'
import useHome from './useHome'

export default function Home(props:any){
    const {} = useHome(props)
    return(
        <div className={style.home}>
            <div>Home</div> 
        </div>
    )
}