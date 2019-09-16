import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { items: [] };

  async componentDidMount() {
    const response = await fetch('/api/items');
    const { items } = await response.json();
    if (process.env.NODE_ENV === 'production') {
      console.log('production');
    }
    console.log('items', items);
    this.setState({ items });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.items && this.state.items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;