import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  redner() {
    (
      <div className="App">
        <header className="App-header">
          <nav class="nav nav-tabs nav-stacked">
            <a class="nav-link active" href="#">Active link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" href="#">Disabled link</a>
          </nav>
        </header>

      </div>
    );
  }
}

export default App;
