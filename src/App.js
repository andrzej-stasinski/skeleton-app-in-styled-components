import React from 'react';
import {ThemeProvider} from 'styled-components'
import theme from './theme'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Main from './components/Main/Main'
import Aside from './components/Main/Aside'
import Section from './components/Main/Section'
import Footer from './components/Footer'
import {createGlobalStyle} from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body {
    font-family: sans-serif;
    font-size: 1.2em;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

function App() {
  const options = [
    {content: 'Ala'},
    {content: 'Ola'},
  ]
    return (

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <Header>Header</Header>
          <Main>
            <Aside items={options}>
              {/* <div>
                <h2>Navigation</h2>
                <nav class="navigation">
                  <ul>
                    <li><a href="/index.html" class="active" >Start</a></li>
                    <li>
                      <a href="/news.html" aria-current="page">News</a>
                    </li>
                    <li><a href="/product">Product</a></li>
                    <li><a href="/burgers">Burgers</a></li>
                  </ul>
                </nav>
              </div> */}
            </Aside>
            <Section>
              Section
              {/* <div style="padding-left: 10px">
                <div>
                  <h2>News</h2>
                  <h3>Info for use NOT Logged In</h3>
                  <h3>General info for all uersa</h3>
                </div>
              </div> */}
            </Section>
          </Main>
          <Footer>Footer</Footer>
        </Wrapper> 
      </ThemeProvider>
  
  );
}

export default App;
