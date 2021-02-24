import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#fff',
    fontColor: '#373949',
    border: 'solid .4px lightgray;',
    color: 'black'
}

export const darkTheme = {
    body: '#373949',
    fontColor: '#fff',
    innerBody: '#333438',
    border: 'none',
    color: 'white'

}

export const GlobalStyles = createGlobalStyle `

body {
    background-color: ${props => props.theme.body};
    margin : 0;
}

.app {
    background-color: ${props => props.theme.body}
}

.app-header {
    background-color: ${props => props.theme.innerBody}
}

.post {
    background-color: ${props => props.theme.innerBody};

    color: ${props => props.theme.fontColor};

    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

    border: ${props => props.theme.border};
}

.fa {
    color: ${props => props.theme.color}
}

.app-header h4 {
    color: ${props => props.theme.color}
}
`