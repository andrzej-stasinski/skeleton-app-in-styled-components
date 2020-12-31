import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    outline: 1px solid red;
    background-color: ${props => props.theme.colors.gray.light}
`

export default Wrapper