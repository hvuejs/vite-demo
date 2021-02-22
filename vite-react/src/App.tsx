/*
 * @Author: 清风
 * @Date: 2021-02-20 10:05:28
 * @Description: 
 */
import React, { useState, Suspense } from 'react'
import logo from './logo.svg'
import './App.css';
import { HashRouter, Link, Route,
  NavLink,
  Switch,
  withRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import styled from "styled-components";
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred; 
`;
import routes from "router/index";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      <header>
        <Title>HELLO WORLD!!!</Title>
      </header>
      <HashRouter>
        <div>
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/demo/demo1'>demo</Link></li>
            <li><Link to="/detail/100">detail</Link></li>
            <li><Link to='/copy'>copy</Link></li>
            <li><Link to='/hooks/class'>hooks</Link></li>
          </ul>
      </div>
      {
        renderRoutes(routes)
      }
        </HashRouter>
      </Suspense>
    </div>
  )
}

export default App;
