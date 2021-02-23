import React from 'react'
import { useHistory } from "react-router-dom"

export default function useLink(props: { to: any }) {
    const { replace } = useHistory()
    function handle() {
        // push to stacks views
        if (props.to) replace(props.to) 
    }
    return { handle };
}
