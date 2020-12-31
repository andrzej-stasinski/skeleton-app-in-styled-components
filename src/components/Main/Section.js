import styled from 'styled-components'

const Section = styled.div`
    flex-grow: 1;
    outline: 1px solid red;
    background: #ddd;
    padding: 10px;
    background-color: ${props => props.theme.colors.gray.section}
`

export default Section