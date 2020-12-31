import React from 'react'
import styled from 'styled-components'
import {AsideContainer, List, LinkStyled} from './Aside'

const Navbar = ({items}) => {
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

export default Navbar
