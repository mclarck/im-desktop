import React from 'react'
import style from './style.module.css'
import useChats from './useChats'

export default function Chats(props:any){
    const {} = useChats(props)
    return(
        <div className={style.chats}>
            <div>Chats</div> 
        </div>
    )
}