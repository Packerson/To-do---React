import React, {Component} from 'react';
import { createRoot } from 'react-dom/client';
import {
  HashRouter, BrowserRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet
} from 'react-router-dom';

import Main from "./main";

function App() {
  return (<Main/>)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
