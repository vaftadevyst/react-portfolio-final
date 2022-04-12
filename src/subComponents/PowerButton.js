// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'


const Power = styled.button`
position: fixed;
top: ${props => props.top};
bottom: ${props => props.bottom};
left: ${props => props.left};
right: ${props => props.right};
transform: translate(-50%, 0);

background-color: transparent;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid transparent;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

// &:hover{
//     background-color: rgba(0,0,255,0.3);
//     box-shadow: 0 0 8px 6px rgba(0,0,255,0.1);
// }

&>*:first-child{
    text-decoration: none;
    color: grey;
}
&>*:first-child:hover{
    color: green;
}
`

const PowerButton = (props) => {
    return (
        <Power top={props.top}  left={props.left}  right={props.right} bottom={props.bottom}>
        <NavLink to="/">
        <PowerBtn width={30} height={30} fill='currentColor' />
        <strong>Back</strong>
        </NavLink>
        </Power>
    )
}

export default PowerButton
