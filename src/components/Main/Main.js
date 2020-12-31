import styled from 'styled-components'

const Footer = styled.div`
    flex-grow: 1;
    display: flex;
    outline: 1px solid red;
    height: calc(100vh - 200px);
    background-color: ${props => props.theme.colors.gray.normal}
`

export default Footer