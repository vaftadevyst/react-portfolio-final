import React from 'react'
import styled from 'styled-components'


const Text = styled.h4`
position: fixed;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
bottom: ${props => props.bottom};
color: white;
font-size: calc(.2rem + 3vw);
z-index:0;
font-weight: 600;
opacity: .4;

`

const Subtitle = (props) => {
    return (
        <Text  top={props.top}  left={props.left}  right={props.right} bottom={props.bottom}>
            {props.text}
        </Text>
    )
}


export default Subtitle
