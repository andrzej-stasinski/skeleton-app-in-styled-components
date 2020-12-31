import styled from 'styled-components'

const Header = styled.div`
    line-height: 100px;
    display: flex;
    justify-content: space-between;
    outline: 1px solid red;
    border-right: 1px solid red;
    background-color: ${props => props.theme.colors.gray.normal}
`

export default Header