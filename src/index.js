import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList";
import {Provider} from 'react-redux';
import store from './store'
import {BrowserRouter, Route} from 'react-router-dom'
import Footer from './Footer'
const App = (
    <Provider store={store}>
        <div>
            <TodoList/>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={Footer}/>
                    <Route path='/detail' excat render = {()=><h1>This is detail page.</h1>}/>
                </div>
            </BrowserRouter>
        </div>
    </Provider>
);

ReactDOM.render(
  App,
  document.getElementById('root')
);
