import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App-header">
//       <Header/>
//       <TodoList/>
//       <Footer/>
//     </div>
//   );
// }

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false})
    }, 1000)
  }

  render() {
    return  (
      <div className="App-header">
      <Header/>
    { this.state.isLoading ? <p>loading....</p> : <TodoList/> }
      <Footer/>
    </div>
    )
  }
}

export default App;
