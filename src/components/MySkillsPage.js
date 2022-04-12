import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100%;
position: relative;
display: grid;
grid-gap: calc(1rem + 2vw);
justify-content: flex-end;
align-items: center;

`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 55vw;
height: auto;
z-index:3;
line-height: 1.5;
cursor: pointer;
margin: 40% 0 0;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`
const Mainn = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 55vw;
height: auto;
z-index:3;
line-height: 1.5;
cursor: pointer;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
${Mainn}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
${Mainn}:hover &{
   
    color:${props => props.theme.body};

}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton top='30%' left='3rem'/>
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> Data Analyst
</Title>
<Description>
I like to analyze raw data accurately, valuable and easy to understand for decision making.
</Description>
<Description>
<strong>i did it with</strong>
<ul>
    <li>
        Python
    </li>
    <li>
        Excel
    </li>
    <li>
        Tableau
    </li>
    <li>
        Power BI
    </li>
    <li>
        Google Analytics
    </li>
</ul>
</Description>

            </Main>
            <Mainn>
<Title>
    <Develope width={40} height={40} /> Web Developer
</Title>
<Description>
I like to build websites with attractive appearance, features and amazing user interface for user convenience
</Description>
<Description>
<strong>programming language</strong>
<ul>
    <li>HTML,CSS, Javascript</li>
    <li>PHP</li>
    <li>MySQL</li>
    <li>React</li>
</ul>
</Description>

            </Mainn>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
