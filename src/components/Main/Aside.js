import React from 'react'
import styled from 'styled-components'
import {NavLink, Link} from 'react-router-dom'

const AsideContainer = styled.div`
    min-width: 240px;
    outline: 1px solid red;
    background-color: ${props => props.theme.colors.gray.aside}
`
const List = styled.ul`
    list-style-type: none;
    border: 2px solid green;
`
const LinkStyled = styled(NavLink)`
    text-decoration: none;
    display: block;
    padding: 10px;
    background: #eee;
    color: #333;
    &:hover {
        background: #444;
        color: #ddd;
        transition: .5s;
        cursor: pointer;
    }
    &.active {
        background: #222;
        color: #eee;
    }
`

const Aside = ({items}) => {
    return (
        <AsideContainer>
            <List>
                {
                items.map(item => (
                    <li key={item.content}>
                        <LinkStyled to={item.path}>
                        {item.content}
                        </LinkStyled>
                    </li>
                ))
                }
            </List>
        </AsideContainer>
    )
}

export default Aside
