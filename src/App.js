import React from 'react';
import {ThemeProvider} from 'styled-components'
import theme from './theme'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Main from './components/Main/Main'
import Navbar from './components/Main/Navbar/Navbar'
import Section from './components/Main/Section'
import Footer from './components/Footer'
import {createGlobalStyle} from 'styled-components'
import { normalize } from 'styled-normalize'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import New from './pages/New'
import Product from './pages/Products'
import Contact from './pages/Contact'

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
    {content: 'News', path: '/new'},
    {content: 'Product', path: '/product'},
    {content: 'Contact', path: '/contact'},
  ]
    return (

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Wrapper>
            <Header>Header</Header>
            <Main>
              <Navbar items={options}>

              </Navbar>
              <Section>

                <Switch>
                  <Route path="/new">
                    <New />
                  </Route>
                  <Route path="/product">
                    <Product />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                </Switch>

              </Section>
            </Main>
            <Footer>Footer</Footer>
          </Wrapper>           
        </Router>

      </ThemeProvider>
  
  );
}

export default App;
