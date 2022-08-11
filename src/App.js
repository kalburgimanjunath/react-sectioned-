import React from 'react';
import './style.css';
import Avatar from './Avatar';
import About from './About';
import Social from './Social';
export default function App() {
  return (
    <div className="main">
      <div className="container">
        <Avatar />
        <About />
        <Social />
      </div>
      <div></div>
    </div>
  );
}
