import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTempl';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

@observer
class todoList extends Component {
  @observable email = '';
  @observable passwords = '';

  constructor(props) {
    super(props);
  }
  
  render() {
    const { email, password } = this
    return (
      <>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </>
    );
  }
}

export default App;
