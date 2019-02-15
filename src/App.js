import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Category from './components/Category';
import NewsArticle from './components/NewsAtricle';

class App extends Component {
  render() {
    return (
      <div className='main'>
          <Header />
          <div className="hero-section">
            <Category />
            <NewsArticle />
          </div>
      </div>
    )
  }
}

export default App;
