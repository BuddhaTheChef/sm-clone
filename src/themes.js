import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#fff',
    fontColor: '#373949'
}

export const darkTheme = {
    body: '#373949',
    fontColor: '#fff'
}

export const GlobalStyles = createGlobalStyle `

body {
    background-color: ${props => props.theme.body}
}

.app {
    background-color: ${props => props.theme.body}
}

`