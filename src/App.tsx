import React, { useState } from 'react';
import { Layout, Menu, theme, Breadcrumb, Alert, Button } from 'antd';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/home/Home';

const App = () => {
  return (
    <HashRouter>
      <Home />
    </HashRouter>
  );
};

export default App;
