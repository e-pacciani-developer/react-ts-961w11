import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import { ChakraProvider, Button, Flex } from '@chakra-ui/react';
import MyForm from './Form';
import MyTable from './Table';
import UserData from './UserData';
import { Provider } from 'jotai';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Provider>
          <ChakraProvider>
            <Flex justify="space-between">
              <nav>
                <Link to="/">
                  <Button mt={4} ml={10} colorScheme="green" type="button">
                    Form
                  </Button>
                </Link>
                <Link to="/tabella">
                  <Button mt={4} ml={10} colorScheme="green" type="button">
                    Tabella
                  </Button>
                </Link>
              </nav>
              <UserData />
            </Flex>

            <Routes>
              <Route path="/" element={<MyForm />} />
              <Route path="tabella" element={<MyTable />} />
            </Routes>
          </ChakraProvider>
        </Provider>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
